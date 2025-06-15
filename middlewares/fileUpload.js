
const path = require("node:path");
const multer = require("multer");
const { v4 : uuidv4 } = require("uuid");

// Multer Configuration and setup
/**
 * 
 * 1.Where will the fill be stored ? (RAM , HDD/SDD => storage path etc)
 * 2. Which types of files are allowed?
 * 3. Size limitation?
 * 4. Name of the file after upload? etc
 */

/**Multer Configuration
 * 1. Initialize Storage information
 * 2. Connect storage with multer instance / multer initialzation
 */

const fileStoragePath = path.join(__dirname,"../uploaded_files");
console.log("fileStorage path ",fileStoragePath);

const storage = multer.diskStorage({
    destination : fileStoragePath,
    filename: (req, file, cb) => {
        console.log(file);
        // const fileName = file.originalname;
        // console.log("file name : " , fileName);
      const fileName = uuidv4() + path.extname(file.originalname);  //Logic to create filename
        cb(null,fileName);
    }
})

const uploader = multer({
    storage: storage 
})

module.exports = uploader;