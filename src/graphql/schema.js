import { ApolloServer } from "apollo-server-express";
import { fileLoader, mergeTypes, mergeResolvers } from "merge-graphql-schemas";
import models from "../models";
import path from "path";
import "dotenv/config";

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, "../types")));

const resolvers = mergeResolvers(
  fileLoader(path.join(__dirname, "../resolvers"))
);

const SERVER = new ApolloServer({
  typeDefs,
  resolvers,
  context: (express) => ({
    models,
    SECRET: process.env.SECRET,
    //authScope: getScope(express.req.headers.authorization),
    user: express.req.user,
    /* user: {
      _id: 1,
      username: "gcarames",
    }, */
  }),
  playground: {
    endpoint: `http://localhost:3000/graphql`,
    settings: {
      "editor.theme": "dark",
    },
  },
});

export default SERVER;
