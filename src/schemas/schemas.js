// var BookSchema = new mongoose.Schema({
//   id: String,
//   isbn: String,
//   title: String,
//   author: String,
//   description: String,
//   published_year: { type: Number, min: 1945, max: 2019 },
//   publisher: String,
//   updated_date: { type: Date, default: Date.now },
// });

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLSchema,
  GraphQLID,
  GraphQLFloat,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';
import UserModel from './user/user';
import GraphQLDate from 'graphql-date';

import mongoose from 'mongoose';

var userType = new GraphQLObjectType({
  name: 'user',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    lastname: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    updated_date: {
      type: GraphQLDate
    }
  }),
});

var query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    users: {
      type: new GraphQLList(userType),
      resolve: () => {
        const users = UserModel.find().sort({ _id: -1 }).exec();
        if (!users) {
          throw new Error('Error Users');
        }
        return users;
      }
    },
    user: {
      type: userType,
      args: {
        id: {
          name: '_id',
          type: GraphQLString,
        }
      },
      resolve: (root, { id }) => {
        const user = UserModel.findById(id).exec();
        if (!user) {
          throw new Error('Error user');
        }
        return user;
      }
    }
  })
});

var mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    addUser: {
      type: userType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
          type: new GraphQLNonNull(GraphQLString)
        },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        email: {
          type: new GraphQLNonNull(GraphQLString)
        },
        // published_year: {
        //   type: new GraphQLNonNull(GraphQLDate)
        // },
        // publisher: {
        //   type: new GraphQLNonNull(GraphQLString)
        // }
      },
      resolve: (root, params) => {
        const userModel = new UserModel(params);
        const newUser = userModel.save();
        if (!newUser) {
          throw new Error('Error');
        }
        return newUser;
      }
    },
    updateUser: {
      type: userType,
      args: {
        id: {
          name: 'id',
          type: new GraphQLNonNull(GraphQLString)
        },
        name: {
          type: new GraphQLNonNull(GraphQLString)
        },
        lastname: {
          type: new GraphQLNonNull(GraphQLString)
        },
        // email: {
        //   type: new GraphQLNonNull(GraphQLString)
        // },
        description: {
          type: new GraphQLNonNull(GraphQLString)
        },
        // published_year: {
        //   type: new GraphQLNonNull(GraphQLInt)
        // },
        // publisher: {
        //   type: new GraphQLNonNull(GraphQLString)
        // }
      },
      resolve: (root, params) => {
        return UserModel.findByIdAndUpdate(id, { ...params, updated_date: new Date() }, (err) => {
          if (err) return next(err);
        });
      }
    },
    removeUser: {
      type: userType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString)
        }
      },
      resolve(root, params) {
        const remUser = UserModel.findByIdAndRemove(params.id).exec();
        if (!remUser) {
          throw new Error('Error')
        }
        return remUser;
      }
    }
  }),
});

export default new GraphQLSchema({ query, mutation });