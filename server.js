import Connection from "./database/db.js";
import cors from "cors";
import express from "express";
import router from "./routes/route.js";
import bodyParser from "body-parser";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(bodyParser.json());
app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
const password = process.env.PASSWORD;
const URI =
  process.env.MONGODB_URL ||
  `mongodb+srv://prashanthchary91595:${password}@blogclustoe.f1qrdrz.mongodb.net/?retryWrites=true&w=majority&appName=Blogclustoe`;

Connection(URI);
