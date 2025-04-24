const { ApolloServer } = require('@apollo/server');
const resolvers = require('./resolvers');
const typeDefs = require('./schema');

async function createApolloGraphqlServer() {
  const gqlServer = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers,
  });


  await gqlServer.start();

  return gqlServer;
}

module.exports = createApolloGraphqlServer;
