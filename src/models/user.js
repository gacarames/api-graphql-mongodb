import mongoose from "mongoose";
import validate from "mongoose-validator";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    validate: [
      validate({
        validator: "isLength",
        arguments: [6, 12],
        message:
          "el nombre de usuario debe contener entre {ARGS[0]} y {ARGS[1]}",
      }),
      validate({
        validator: "isAlphanumeric",
        message: "El nombre de usuario debe ser alfanumerico",
      }),
    ],
  },
  fullname: String,
  password: String,
  email: {
    type: String,
    validate: validate({
      validator: "isEmail",
      message: "Introducir un email valido",
    }),
  },
  bio: String,
  thumbnail: String,
});

const User = mongoose.model("user", UserSchema);
export default User;
