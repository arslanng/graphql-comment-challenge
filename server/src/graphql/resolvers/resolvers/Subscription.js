import { filter, pipe } from "graphql-yoga";

export const Subscription = {
  // User
  userCreated: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("userCreated"),
  },
  userUpdated: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("userUpdated"),
  },
  userDeleted: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("userDeleted"),
  },

  // Post
  postCreated: {
    subscribe: (_, args, { pubSub }) => {
      return pipe(
        pubSub.subscribe("postCreated"), 
        filter(
          (
            value 
          ) =>
            args.user_id 
              ? value.postCreated.user == args.user_id // value.postCreated.user_id değiştirildi
              : true 
        )
      );
    },
  },
  postUpdated: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("postUpdated"),
  },
  postDeleted: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("postDeleted"),
  },
  postsCount: {
    subscribe: async (_, __, { pubSub, _db }) => {
      const postsCount = await _db.Post.countDocuments(); // mevcut post sayısı çekildi.

      setTimeout(() => {
        pubSub.publish("postsCount", { postsCount });
      });
      return pubSub.subscribe("postsCount");
    },
  },

  // Comment
  commentCreated: {
    subscribe: (_, args, { pubSub }) => {
      return pipe(
        pubSub.subscribe("commentCreated"),
        filter((value) =>
          args.post_id ? value.commentCreated.post == args.post_id : true // value.commentCreated.post_id değiştirildi
        )
      );
    },
  },
  commentUpdated: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("commentUpdated"),
  },
  commentDeleted: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("commentDeleted"),
  },
};
