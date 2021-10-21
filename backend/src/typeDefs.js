import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    firstName: String
    lastName: String
    imgUrl: String
    bikeBuilds: [String]!
  }
  type Token {
    value: String!
  }
  type Bike {
    id: ID!
    products: [String]
    createdBy: String
    createdAt: String
  }
  type Product {
    id: ID!
    product_id: String!
    name: String!
    brand: String!
    grade: Int!
    numReviews: Int!
    price: Float!
    type: String!
  }

  type Query {
    getCurrentUser(email: String!): User
<<<<<<< HEAD
    getAllUsers: [User]
    getBike(_id: ID!): Bike!
=======
    getBike(id: ID!): Bike!
>>>>>>> 2cf6d9cdec516966e5bf05bb4e8aed09b369c4de
    getMyBikes(email: String!): [Bike]!
    getAllBikes: [Bike!]!
    getProduct(product_id: String): Product!
    getAllProducts: [Product!]!
  }
  type Mutation {
    createUser(
      email: String!
      username: String!
      firstName: String
      lastName: String
      imgUrl: String
    ): User
    addBike(email: String!, products: [String]!, createdBy: String!): Bike!
    editBike(email: String!, id: ID!, color: String!): Bike!
    deleteBike(email: String!, id: ID!): Bike!
    addProduct(
      modelSrc: String!
      name: String!
      brand: String!
      grade: Int!
      numReviews: Int!
      price: Float!
      imgLink: String!
      type: String!
    ): Product
  }
`;
