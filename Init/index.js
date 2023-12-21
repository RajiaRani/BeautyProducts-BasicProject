const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/list.js");

const mongoUrl ="mongodb://127.0.0.1:27017/beautyProducts";
main()
.then(() => {
    console.log("connect to DataBase");
}) .catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(mongoUrl);
};

const initDB = async() => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();