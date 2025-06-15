const { default: mongoose } = require("mongoose")

const fileSchema = mongoose.Schema({
    originalFileName: {
        type: String,
        required : true
    },
    modifiedFileName: {
        type:String,
        required: true,
    },
    size:{
        type:Number,
    },
    path:{
        type:String,
        required:true,
    },
    user : {
        type: String,
        default :"john@example.com"
    }
},{
    timestamps:true
})

const FileModel = mongoose.model("files", fileSchema);

module.exports = FileModel;