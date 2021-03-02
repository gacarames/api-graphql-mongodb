import { gql } from "apollo-server-express";

const users = gql`
  type Error {
    path: String!
    message: String!
  }

  type User {
    _id: ID!
    username: String!
    fullname: String!
    password: String!
    email: String!
    bio: String
    thumbnail: String
  }

  type Query {
    allUsers: [User!]!
    getUser(_id: ID!): User!
  }

  type Response {
    success: Boolean!
    errors: [Error]
    token: String
  }

  type Mutation {
    login(email: String!, password: String!): Response!

    createUser(
      username: String!
      password: String!
      fullname: String!
      email: String!
    ): Response!
  }
`;
export default users;
