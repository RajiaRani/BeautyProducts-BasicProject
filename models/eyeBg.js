const mongoose =require("mongoose");
const Schema = mongoose.Schema;
const eyeSchema = new Schema({
    image:
        {
        type: String,
        }
});
const eyePage = mongoose.model("eyePage",eyeSchema);
module.exports = eyePage;