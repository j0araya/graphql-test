import { Schema, model } from 'mongoose';

const schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: String,
  description: String,
});

export default model('User', schema);