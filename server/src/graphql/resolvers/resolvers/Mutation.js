export const Mutation = {
  // User
  createUser: async (_, { data }, { pubSub, _db }) => {
    const newUser = new _db.User({
      ...data,
    });

    const user = await newUser.save();

    pubSub.publish("userCreated", { userCreated: user });

    return user;
  },
  updateUser: async (_, { id, data }, { pubSub, _db }) => {
    const is_user_exist = await _db.User.findById(id);
    if (!is_user_exist) {
      throw new Error("User not found.");
    }

    const update_user = await _db.User.findByIdAndUpdate(id, data, {
      new: true, // bize güncellenen kullanıcının datasını dönmesi için yazıldı.
    });
    pubSub.publish("userUpdated", { userUpdated: update_user });
    return update_user;
  },
  deleteUser: async (_, { id }, { pubSub, _db }) => {
    const is_user_exist = await _db.User.findById(id);
    if (!is_user_exist) {
      throw new Error("User not found.");
    }

    const deleted_user = await _db.User.findByIdAndDelete(id);

    pubSub.publish("userDeleted", { userDeleted: deleted_user });
    return deleted_user;
  },
  deleteAllUsers: async (_, __, { _db }) => {
    const delete_users = await _db.User.deleteMany({});

    return {
      count: delete_users.deletedCount,
    };
  },
  // Post
  createPost: async (_, { data }, { pubSub, _db }) => {
    const newPost = new _db.Post({
      ...data,
    });

    const post = await newPost.save();

    const user = await _db.User.findById(data.user);
    user.posts.push(post.id);
    user.save(); // bu üç satır post bilgisini ilgili usera eklemek için

    const postsCount = await _db.Post.countDocuments();

    pubSub.publish("postCreated", { postCreated: post });
    pubSub.publish("postsCount", { postsCount });
    return post;
  },
  updatePost: async (_, { id, data }, { pubSub, _db }) => {
    const is_post_exist = await _db.Post.findById(id);
    if (!is_post_exist) {
      throw new Error("Post not found.");
    }

    const updated_post = await _db.Post.findByIdAndUpdate(id, data, {
      new: true, // bize güncellenen kullanıcının datasını dönmesi için yazıldı.
    });

    pubSub.publish("postUpdated", { postUpdated: updated_post });
    return updated_post;
  },
  deletePost: async (_, { id }, { pubSub, _db }) => {
    const is_post_exist = await _db.Post.findById(id);
    if (!is_post_exist) {
      throw new Error("User not found.");
    }

    const postDeleted = await _db.Post.findByIdAndDelete(id);

    const postsCount = await _db.Post.countDocuments();

    pubSub.publish("postDeleted", { postDeleted });
    pubSub.publish("postsCount", { postsCount });

    return postDeleted;
  },
  deleteAllPosts: async (_, __, { pubSub, _db }) => {
    const deleted_posts = await _db.Post.deleteMany({});

    pubSub.publish("postsCount", { postsCount: 0 });
    return {
      count: deleted_posts.deletedCount,
    };
  },

  // Comment
  createComment: async (_, { data }, { pubSub, _db }) => {
    const newComment = new _db.Comment(data);
    const createdComment = await newComment.save();

    const post = await _db.Post.findById(data.post);
    const user = await _db.User.findById(data.user);

    post.comments.push(createdComment.id);
    user.comments.push(createdComment.id);

    await post.save();
    await user.save();

    pubSub.publish("commentCreated", { commentCreated: createdComment });
    return createdComment;
  },
  updateComment: async (_, { id, data }, { pubSub, _db }) => {
    const is_comment_exist = await _db.Comment.findById(id);
    if (!is_comment_exist) {
      throw new Error("Comment not found.");
    }

    const updated_comment = await _db.Comment.findByIdAndUpdate(id, data, {
      new: true, // bize güncellenen kullanıcının datasını dönmesi için yazıldı.
    });

    pubSub.publish("commentUpdated", { commentUpdated: updated_comment });

    return updated_comment;
  },
  deleteComment: async (_, { id }, { pubSub, _db }) => {
    const is_commet_exist = await _db.Comment.findById(id);
    if (!is_commet_exist) {
      throw new Error("Comment not found.");
    }

    const commentDeleted = await _db.Comment.findByIdAndDelete(id);

    pubSub.publish("commentDeleted", { commentDeleted });
    return commentDeleted;
  },
  deleteAllComments: async (_, __, { _db }) => {
    const deleted_comment = await _db.Comment.deleteMany({});

    return {
      count: deleted_comment.deletedCount,
    };
  },
};
