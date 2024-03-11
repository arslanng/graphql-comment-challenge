export const Comment = {
  post: async (parent, __, { _db }) => await _db.Post.findById(parent.post),
  user: async (parent, __, { _db }) => await _db.User.findById(parent.user),
};
