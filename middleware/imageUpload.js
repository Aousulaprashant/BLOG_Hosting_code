import { GridFsStorage } from "multer-gridfs-storage";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();
const password = "Prashanth1234";

const storage = new GridFsStorage({
  url: `mongodb+srv://prashanthchary91595:${password}@blogclustoe.f1qrdrz.mongodb.net/?retryWrites=true&w=majority&appName=Blogclustoe`,
  options: { useNewUrlParser: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    console.log("File received:", file);
    if (match.indexOf(file.mimetype) === -1) {
      return {
        filename: `${Date.now()}-blog-${file.originalname}`,
      };
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({ storage });
