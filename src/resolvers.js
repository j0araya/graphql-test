import { User } from './models/Models';

export const resolvers = {

  Query: {
    user: (root, args, context) => 'IT WORKSS!',
    users: () => User.find(),
  },

  Mutation: {
    addUser: (root, { data }) => new User(data).save(),
    deleteUser: (root, { _id }) => User.findOneAndRemove(_id),
    updateUser: (root, { _id, data }) => User.findOneAndUpdate(_id, data, { new: true }),
    // const newData = 
    // return newData;
    // console.log('newData', newData);
    // const user = { ...data, id: users.length };
    // users.push(user);
    // return user;
    // }
  }

};