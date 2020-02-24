import express from 'express';
import graphqlHTTP from 'express-graphql';
import { execute, subscribe } from 'graphql';
import schema from './schemas/schemas';
import { connect } from './db';
import path from 'path';
import { createServer } from 'http';
import mongo from 'mongoose';
import cors from 'cors';
import { PubSub } from 'graphql-subscriptions';
import { SubscriptionServer } from 'subscriptions-transport-ws';

const PORT = process.env.PORT || 8080;
const app = express();
const server = createServer(app);

connect();
app.set('port', PORT);
app.get('/', (req, res) => {
  // res.json({ message: 'it WOrks' });
});

const pubsub = new PubSub();
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

app.listen(PORT, () => {
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
