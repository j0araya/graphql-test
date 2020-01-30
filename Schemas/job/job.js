const typeDefs = `
  type Job {
    id: ID!
    name: String
    description: String
  }
`;

const Query = `
  jobs: [Job]
`;


const resolvers = {
  Jobs: {
    jobs: () => jobs,
  }
};

module.exports = {
  typeDefs,
  resolvers,
  Query,
};