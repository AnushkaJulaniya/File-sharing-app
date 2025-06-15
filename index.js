// console.log("File Sharing App");

const express  = require("express");
const dotenv = require("dotenv");
const path = require("node:path");
const multer = require("multer");
const mongoose = require("mongoose");

const fileRoutes = require("./routes/file.routes");

const PORT = process.env.PORT || 8080; 

const app = express();
dotenv.config();

//Middlewares
 app.use(express.json());
app.use(express.urlencoded());

// DB Connection
mongoose.connect("mongodb://127.0.0.1:27017/file_sharing_app")
.then(() => console.log("DB Connected successfully"))
.catch(err => console.log("DB Connection failed",err))

// Module Routes
app.use(fileRoutes);


app.listen(8080, () => console.log(`Server is up and running at port ${PORT}`))