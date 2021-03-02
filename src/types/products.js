import { gql } from 'apollo-server-express';

const products = gql`
    type Product {
        _id: ID!,
        by: User
        name: String,
        category: [String],
        price: String, 
        shipping: Boolean,
        description: String,
        image: [String],
        stock: String,
        createdAt: String,
    }

    input iProduct {
        name: String,
        category: [String],
        price: String,
        shipping: Boolean,
        description: String,
        image: [String],
        stock: String,
    }

    type Query {
        allProducts: [Product!]!
        getProduct(_id: ID!): Product!
    }

    type Mutation {
        createProduct(product: iProduct): Product!
        
        updateProduct(_id: String!, name: String, description: String, complete: Boolean): Product!

        deleteProduct(_id: String!): Product        
    }
`
export default products