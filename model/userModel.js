import mongoose from "mongoose";

const User = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const user = mongoose.model("user", User);

export default user;
