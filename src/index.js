import express from "express";
import SERVER from "./graphql/schema";
import mongoose from "mongoose";
import auth from "./auth";

const app = express();

mongoose
  .connect("mongodb://localhost/db_tasks", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

mongoose.set("useCreateIndex", true);

app.use(auth.checkHeaders);

// Middleware: GraphQL
SERVER.applyMiddleware({
  app,
});

// settings
app.set("port", process.env.PORT || 3000);

// start the server
app.listen(app.get("port"), () => {
  console.log("server on port 3000");
});
