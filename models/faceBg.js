const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const faceSchema = new Schema({
    image:
        {
        type: String,
        }
});
const Facepage = mongoose.model("Facepage",faceSchema);
module.exports = Facepage;
