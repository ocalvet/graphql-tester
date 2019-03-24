const graphql = require('graphql');
const _ = require('lodash');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema
} = graphql;

const users = [
    { id: '1', name: 'Name1', age: 21 },
    { id: '2', name: 'Name2', age: 22 },
    { id: '3', name: 'Name3', age: 23 },
    { id: '4', name: 'Name4', age: 24 },
]

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve (parentValue, args) {
                return _.find(users, { id: args.id });
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});