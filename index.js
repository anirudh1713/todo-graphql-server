require('dotenv').config()
const { ApolloServer } = require('apollo-server');
const Knex = require('knex');
const { Model } = require('objection');
const knexConfig = require('./knexfile');

const schema = require('./graphql/schema');
const rootResolvers = require('./graphql/resolvers');

// Database setup.
const knex = Knex(knexConfig.development);
Model.knex(knex);

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: rootResolvers,
});

// Check connection and start server.
knex.raw('select 1+1 as result').then(() => {
  console.log('🚀  Database connection successful.');
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}).catch((err) => {
  console.log('Something went wrong!');
  console.log(err);
});
