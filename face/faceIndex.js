const mongoose = require("mongoose");
const faceData = require("./faceData.js");
const FaceContent = require("../models/facepage.js");

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

const faceDB = async() => {
    await FaceContent.deleteMany({});
    await FaceContent.insertMany(faceData.data);
    console.log("data was initialized");
};
faceDB();