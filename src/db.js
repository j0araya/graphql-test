import mongoose from 'mongoose';
export const connect = async () => {
  mongoose.Promise = global.Promise;
 let mongoUserCredentials;
 console.log('per', process.env.MONGO_USER);
  if (process.env.MONGO_USER && process.env.MONGO_PASSWORD) {
    mongoUserCredentials = `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}`;
  }

  // const MONGO_URL = process.env.MONGO_URL || 'localhost:27017';
  // const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'graphql-test';
  
  const MONGO_DB_NAME='graphql-test';
  const MONGO_URL='cluster0-2mk0o.mongodb.net';
  const MONGO_USER='qwerty0';
  const MONGO_PASSWORD='2JFgDggA9X6OuYCK';

  const MONGO_CONNECTION_STRING = `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DB_NAME}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db is connected');
  } catch (e){
    console.log('Error db', e);
  }
}
