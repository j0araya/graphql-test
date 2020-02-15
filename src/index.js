import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../schemas/schemas';
import { connect } from './db';
import path from 'path';
import http from 'http';
import mongo from 'mongoose';
var cors = require("cors");

const app = express();

connect();

app.get('/', (req, res) => {
  // res.json({ message: 'it WOrks' });
});

// const schema = {};



mongo.connection.once('open', () => {
  console.log('connected to database');
})
app.use('*', cors());
app.use('/graphql', cors(), graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: 'global',
  context: {
    messageId: 'test',// <--- context
  },
}));

app.listen(8080, () => {
  console.log('Server running succefully...')
})

app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => console.log('rurnning oon 3000'));
// const { ApolloServer, gql } = require('apollo-server');

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

//   
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