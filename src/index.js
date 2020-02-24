import express from 'express';
import graphqlHTTP from 'express-graphql';
import { execute, subscribe } from 'graphql';
import schema from './schemas/schemas';
import Models from './models/Models';
import { connect } from './db';
import path from 'path';
import { createServer } from 'http';
import mongo from 'mongoose';
import cors from 'cors';
import compression from 'compression';
import bodyParser from 'body-parser';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { graphqlExpress } from 'apollo-server-express';

import {
  // BASE_URI,
  // WS_BASE_URI,
  PORT,
  // MONGO_URI,
  // MONGO_DATABASE_NAME,
} from './serverConfig';

const app = express();
const server = createServer(app);

connect();
app.set('port', PORT);
app.get('/', (req, res) => {
  // res.json({ message: 'it WOrks' });
});
mongo.connection.once('open', () => {
  console.log('connected to database');
})
app.use('*', cors());
app.use(compression());
app.use('/graphql', bodyParser.json(), graphqlHTTP({
  graphiql: true,
  schema,
  rootValue: 'global',
  context: schema,
}));

server.listen(PORT, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema,
  }, {
    server: server,
    path: '/subscriptions',
  });
  // console.log('Server running succefully...'. PORT)
})

app.use(express.static(path.join(__dirname, 'public')));
