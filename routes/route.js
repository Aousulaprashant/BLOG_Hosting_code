import express from "express";
import { login, signup } from "../controller/userControler.js";
import { getimage, uploadimage } from "../controller/imagecontroler.js";
import upload from "../middleware/imageUpload.js";
import {
  deletePost,
  getAllposts,
  getPostbyId,
  newpost,
  upDate,
} from "../controller/postcontroller.js";
import auth from "../controller/jwt-authentication.js";
import {
  deleteComment,
  getAllcomments,
  newcomment,
} from "../controller/commentControler.js";
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/file/uploadimage", upload.single("file"), uploadimage);
router.get("/file/:filename", getimage);
router.post("/postBlog", auth, newpost);
router.get("/getAllPosts", getAllposts);
router.get("/getPostbyId", getPostbyId);
router.put("/UpdatePost", upDate);
router.delete("/deletePost", deletePost);
router.post("/addcomment", newcomment);

router.get("/getAllcomments", getAllcomments);
router.delete("/deleteComment", deleteComment);
export default router;
