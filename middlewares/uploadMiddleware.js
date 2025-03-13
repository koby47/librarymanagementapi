import multer from "multer";
import { multerSaveFilesOrg } from "multer-savefilesorg";
import dotenv from "dotenv";

dotenv.config();

// 🔹 Configure SaveFilesOrg Storage
const remoteStorage = multerSaveFilesOrg({
  apiAccessToken: process.env.SAVEFILESORG_API_KEY,
  relativePath: process.env.SAVEFILESORG_FOLDER || "/librarymanagementapi" // Default to root
});

// 🔹 Multer Upload Instance
const upload = multer({ storage: remoteStorage, preservePath: true });

export default upload;
