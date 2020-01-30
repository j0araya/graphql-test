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

module.export = { typeDefs, resolvers };