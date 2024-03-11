export const Post = {
  comments: async (parent, __, { _db }) =>
    await _db.Comment.find({post: parent.id}),
  user: async (parent, __, { _db }) =>
    await _db.User.findById(parent.user),
};
