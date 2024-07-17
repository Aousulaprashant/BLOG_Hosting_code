import grid from "gridfs-stream";
import mongoose from "mongoose";

const URL = "http://localhost:5000";
let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once("open", () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: "photos",
  });

  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
});
export const uploadimage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(404).json({ msg: "File not Found" });
    }

    console.log("checkkk");
    const imgeUrl = `${URL}/file/${req.file.filename}`;
    console.log("sucessfull");
    return res.status(200).json(imgeUrl);
  } catch (er) {
    console.log(er);
  }
};

export const getimage = async (req, res) => {
  try {
    const file = await gfs.files.findOne({ filename: req.params.filename });
    const readfile = gridfsBucket.openDownloadStream(file._id);

    readfile.pipe(res);
  } catch (error) {
    return res.status(500).json({ msgss: error.message });
  }
};
