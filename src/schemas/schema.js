const User = require('./user/User');
const Job = require('./job/Job');

const typeDefs = [
  User.typeDefs,
  Job.typeDefs,
];

const resolvers = {
  Query: {
    ...User.query,
    ...Job.query,
  },
  ...User.resolvers,
  ...Job.resolvers,
};


// const { gql } = require('apollo-server');

// const typeDefs = gql`
//   # Your schema will go here
// `;

// module.exports = typeDefs;

// module.export = { typeDefs, resolvers };