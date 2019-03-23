const express = require('express');
const expressGraphQL = require('express-graphql');
const app = express();
const port = process.env.APP_PORT;

if (!port) throw new Error('Set APP_PORT environment variable');

app.use(
  '/graphql',
  expressGraphQL({
    graphiql: process.env.NODE_ENV !== 'production'
  })
);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
