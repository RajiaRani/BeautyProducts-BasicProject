const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const mongoUrl ="mongodb://127.0.0.1:27017/beautyProducts";
// main()
// .then((res) => {
//     console.log(res);
// }) .catch((err) => {
//     console.log(err);
// });

// async function main() {
//     await mongoose.connect(mongoUrl);
// };

const listSchema = new Schema({
    brand:{
        type: String,
        required: true,
    },

    about_product: {
        type: String,
    },
    image: String,

    shade:{
        type: String,
    },
    type: {
        type: String,
    },
});
const Listing = mongoose.model("Listing",listSchema);
module.exports = Listing;
