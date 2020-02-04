import mongoose from 'mongoose';
export const connect = async () => {
  try {
    await mongoose.connect('mongodb+srv://qwerty0:2JFgDggA9X6OuYCK@cluster0-2mk0o.mongodb.net/graphql-test?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('db is connected');
  } catch {
    console.log('Error db');
  }
}
