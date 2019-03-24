const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema');
const app = express();
const port = process.env.APP_PORT;

if (!port) throw new Error('Set APP_PORT environment variable');

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: process.env.NODE_ENV !== 'production'
  })
);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
