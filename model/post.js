import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    // unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  categories: {
    type: String,
    required: true,
  },
  createdDate: {
    type: Date,
  },
  picture: {
    type: String,
  },
});

const post = mongoose.model("post", postSchema);

export default post;
