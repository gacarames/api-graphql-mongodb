import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const auth = {
  checkHeaders: (req, res, next) => {
    const token = req.headers["x-token"];
    if (token) {
      try {
        const { user } = jwt.verify(token, process.env.SECRET);
        req.user = user;
        //console.log("token:", token);
      } catch (error) {}
    }
    next();
  },
  /* (req, res, next) => {
    const token = req.headers["x-token"];
    console.log("token:", token);
    next();
  }, */
  getToken: ({ _id }, SECRET) => {
    const token = jwt.sign({ user: _id }, SECRET, { expiresIn: "3d" });
    const refreshToken = jwt.sign({ user: _id }, SECRET, { expiresIn: "10m" });

    return [token, refreshToken];
  },
  login: async (email, password, User, SECRET) => {
    const user = await User.findOne({ email });

    if (!user) {
      return {
        success: false,
        errors: [
          {
            path: "email",
            message: "Email no existe",
          },
        ],
      };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return {
        success: false,
        errors: [
          {
            path: "password",
            message: "Password no valido",
          },
        ],
      };
    }

    const [token, refreshToquen] = auth.getToken(user, SECRET);

    return {
      success: true,
      token,
      errors: [],
    };
  },
};

export default auth;
