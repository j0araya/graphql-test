"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.listen(3000, function () {
  return console.log('rurnning oon 3000');
}); // const { ApolloServer, gql } = require('apollo-server');
// const typeDefs = gql`
//   # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
//   # This "Book" type defines the queryable fields for every book in our data source.
//   # The "Query" type is special: it lists all of the available queries that
//   # clients can execute, along with the return type for each. In this
//   # case, the "books" query returns an array of zero or more Books (defined above).
//   type Item {
//     id: ID!
//     name: String
//     icon: String
//     description: String
//     createdAt: String
//   }
//   type User {
//     id: ID!
//     name: String!
//     lastname: String!
//     description: String
//     items: [Item]
//     createdAt: String
//   }
//   type Query {
//     users: [User]
//     items: [Item]
//     getUser(id:ID!): User
//   }
//   type Mutation {
//     addItem(name: String, description: String): Item
//     addUser(name: String, description: String): User
//   }
// `;
// const items = [
//   {
//     id: 1,
//     name: 'Me',
//     icon: 'far fa-user',
//     description: 'Perfil',
//   },
//   {
//     id: 2,
//     name: 'Profile',
//     icon: 'far fa-id-badge',
//     description: 'Información General',
//   },
// ];
// const users = [
//   {
//     id: 1,
//     name: 'Alan Brito',
//     lastname: 'Delgado',
//     description: 'Enderezador de alambres',
//   },
//   {
//     id: 2,
//     name: 'Jesus',
//     lastname: 'De Nazaret',
//     description: 'Multiplicador varios',
//   },
//   {
//     id: 3,
//     name: 'Elba',
//     lastname: 'Surita',
//     description: 'CEO',
//   },
//   {
//     id: 4,
//     name: 'Elbert',
//     lastname: 'G',
//     description: 'Influencer',
//   },
//   {
//     id: 5,
//     name: 'Pika',
//     lastname: 'Chu',
//     description: 'Electrico',
//   },
//   {
//     id: 7,
//     name: 'El mismisimo',
//     lastname: 'Albert Einstein',
//     description: '',
//   },
//   {
//     id: 8,
//     name: 'Jhon',
//     lastname: 'Lemmon',
//     description: 'hey hey hey!',
//   },
// ];
// // type Mutation {
// //   addBook(title: String, author: String): Book
// // }
// const resolvers = {
//   Query: {
//     users: () => users,
//     items: () => items,
//     getUser: (parent, args) => users.find(u => u.id == args.id),
//   },
//   Mutation: {
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
// };
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
//   engine: {
//     apiKey: "service:qwerty-graph:-0tcB8w1oz_SVmcdB2ti8Q",
//   }
// });
// // The `listen` method launches a web server.
// server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });
//
//# sourceMappingURL=index.js.map