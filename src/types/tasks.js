import { gql } from 'apollo-server-express';

const tasks = gql`

    type Task {
        _id: String!
        name: String
        description: String
        complete: Boolean!
    }

    type Query {
        allTasks: [Task!]!
        task(_id: String!): Task!
    }

    type Mutation {
        createTask(name: String!, complete: Boolean!): Task!
        updateTask(_id: String!, name: String, description: String, complete: Boolean): Task!
        deleteTask(_id: String!): Task        
    }
`
export default tasks