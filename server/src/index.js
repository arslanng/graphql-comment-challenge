import { createYoga, createSchema, createPubSub } from "graphql-yoga";
import { createServer } from "node:http";

import db from "./db"; // mongoDB
db();

//Models
import User from "./models/User";
import Post from "./models/Post";
import Comment from "./models/Comment";

import data from "./data.js"; // fake data
import resolvers from "@resolvers";
import typeDefs from "@type-defs";

const pubSub = createPubSub();

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  context: {
    pubSub,
    db: data, // fake DB
    _db: {
      // mongoDB
      User,
      Post,
      Comment,
    },
  },
});

const server = createServer(yoga);
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
