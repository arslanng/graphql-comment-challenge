import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: {
    type: String, // veri tipi
    required: true, // zorunlu alan mı?
  },
  age: {
    type: Number,
    required: true,
  },
  profile_photo: String,
  posts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

export default mongoose.model("User", UserSchema);
