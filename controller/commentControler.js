import comments from "../model/commentmodel.js";

export const newcomment = async (req, res) => {
  try {
    console.log(req.body);

    const newcomment = await new comments(req.body);
    newcomment.save();
    res.status(200).json({ msg: "comment saved sucessfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllcomments = async (req, res) => {
  console.log(req.query);
  const postid = req.query.postId;

  console.log(postid, "ppppppppppppppp");
  try {
    const allposts = await comments.find({ postId: postid });
    console.log(allposts);
    return res.status(200).json(allposts);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: err.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const comment = req.body._id;
    console.log(comment, "comment id");

    if (!comment) {
      return res.status(400).json({ msg: "No comment found" });
    }

    await comments.findByIdAndDelete(comment);

    return res.status(200).json({ msg: "deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
