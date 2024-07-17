import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  postId: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    require: true,
  },
});

const comments = mongoose.model("comments", commentSchema);

export default comments;
