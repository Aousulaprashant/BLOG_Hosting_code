import { request } from "express";
import Post from "../model/post.js";

export const newpost = async (req, res) => {
  try {
    const newpost = {
      title: req.body.tittle,
      description: req.body.decription,
      name: req.body.email,
      categories: req.body.catagory,
      createdDate: req.body.date,
      picture: req.body.picture,
    };
    console.log("form controler :", newpost);
    const postdetails = await new Post(newpost);
    postdetails.save();

    return res.status(200).json("post saved sucessfully");
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export const getAllposts = async (req, res) => {
  let cetegory = req.query.category;

  let posts;
  try {
    if (cetegory === "ALL") {
      posts = await Post.find({});
    } else {
      posts = await Post.find({ categories: cetegory });
    }

    return res.status(200).json(posts);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const getPostbyId = async (req, res) => {
  let id = req.query.id;
  console.log(id);
  try {
    const post = await Post.findById(id);

    return res.status(200).json(post);
  } catch (error) {
    return res.status(400).json(error);
  }
};

export const upDate = async (req, res) => {
  let id = req.body._id;
  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(401).json("Post details not found");
    }

    await Post.findByIdAndUpdate(id, {
      $set: req.body,
    });

    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return res.status(400).json(err);
  }
};

export const deletePost = async (req, res) => {
  let id = req.query.id;
  try {
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json("Post Not Found");
    }
    console.log(post);
    await post.deleteOne(); //showin delete is not A function

    return res.status(200).json({ msg: "Post deleted Sucessfull" });
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
};
