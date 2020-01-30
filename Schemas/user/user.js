const { gql } = require('./node_modules/apollo-server');
export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    id: ID
    name: String
    lastname: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    users: [User]
  }
`;

const users = [
  {
    id: '1',
    name: 'Harry Potter and the Chamber of Secrets',
    lastname: 'J.K. Rowling',
  },
  {
    id: '2',
    name: 'Jurassic Park',
    lastname: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    users: () => users,
  },
};

module.exports = {
  typeDefs,
  resolvers,
};