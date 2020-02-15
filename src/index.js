import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from '../schemas/schemas';
import { connect } from './db';
import path from 'path';
import http from 'http';
import mongo from 'mongoose';
import cors from 'cors';
const PORT = process.env.PORT || 8080;

const app = express();

connect();
app.set('port', PORT);
app.get('/', (req, res) => {
  // res.json({ message: 'it WOrks' });
});

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
  console.log('Server running succefully...'. PORT)
})

app.use(express.static(path.join(__dirname, 'public')));
