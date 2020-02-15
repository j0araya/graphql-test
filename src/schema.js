import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
  type Query {
    user(id: String!): String
    users: [User]
  }

  type User {
    _id: ID!
    name: String
    lastname: String
    description: String
    createdAt: String
  }

  type Mutation {
    addUser(data: UserForm): User
    deleteUser(_id: ID): User
    updateUser(_id: ID, data: UserForm): User
  }

  input UserForm {
    name: String!
    lastname: String!
    description: String
  }  
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});

// type Query {
//   users: [User]
//   items: [Item]
//   getUser(id:ID!): User
// }

//Mutation: {
  //     addUser: (parent, args) => {
  //       const item = {
  //         description: args.description,
  //         name: args.name,
  //         id: items.length + 1,
  //         createdAt: new Date().toISOString(),
  //       }
  //       items.push(item)
  //       return item
  //     }
  //   },