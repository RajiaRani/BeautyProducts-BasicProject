const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const homeSchema = new Schema({
    img:{
        type: String,
    },

});
const Homepage = mongoose.model("Homepage",homeSchema);
module.exports = Homepage;
