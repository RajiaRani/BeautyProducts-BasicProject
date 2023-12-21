const mongoose = require("mongoose");
const faceData = require("./faceData.js");
const EyeContent = require("../models/eyepage.js");

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

const eyeDB = async() => {
    await EyeContent.deleteMany({});
    await EyeContent.insertMany(eyeData.data);
    console.log("data was initialized");
};
eyeDB();