const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facecontentSchema = new Schema({
    brand:String,
    heading:String,
    img:String,
    description:String,
    shade: String,
    skin_type:String,
    price:Number,
    size:String,

});
const FaceContent =mongoose.model("FaceContent", facecontentSchema);
module.exports=FaceContent;
