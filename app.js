const express = require("express");
const app = express();
const mongoose = require("mongoose");

//require homepage, lipstick, eye, face
const Homepage = require("./models/home.js");
const Listing = require("./models/list.js");
const Facepage = require("./models/faceBg.js");
const eyePage = require("./models/eyeBg.js");


const port = 8080;

const path = require("path");


const ejsMate = require("ejs-mate");
const FaceContent = require("./models/facepage.js");
app.engine("ejs", ejsMate);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "/public")));

const mongoUrl = "mongodb://127.0.0.1:27017/beautyProducts";
main()
    .then(() => {
        console.log("connect to DataBase");
    }).catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(mongoUrl);
}



//home page
app.get("/home", async (req, res) => {
    const allList = await Homepage.find({});
    //console.log("I am home");
    res.render("beautyList/home.ejs", { allList });
});



//lipstick page- index route
app.get("/home/lipsticks", async (req, res) => {
    const allLip = await Listing.find({});
    res.render("beautyList/lipstick.ejs", { allLip });
    //console.log("sample was saved.");
    //res.send("Successfully connected");
});

//lispstick information page
app.get("/home/lipsticks/:id", async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("beautyList/Infolipstick.ejs", { listing });
});

//face page
app.get("/home/face", async(req,res) => {
 
    const sampleFace = new Facepage({
        image:" https://www.bareminerals.com/cdn/shop/files/BM_SU23_FoundationFreeShip_CLP_Desktop_notext.jpg?v=1686574456&width=1946",
    });
    await sampleFace
    .save();


    //Face Content
    const allFaceContent = await FaceContent.find({});
   
    res.render("beautyList/faceBg.ejs" , {sampleFace, allFaceContent});

 
});


// face content information from id
app.get("/home/face/:id", async(req,res) => {
    let {id} = req.params;
    const allContent = await FaceContent.findById(id);
    res.render("beautyList/faceInfo.ejs", {allContent});
});


// Eye-Page
app.get("/home/eye",async(req,res) => {

    //for cover photo
    const sampleEye = new eyePage({
       image:"https://media.istockphoto.com/id/1336033122/photo/beauty-woman-with-eye-shadow-makeup-palette.jpg?s=612x612&w=0&k=20&c=UBoqQVyLf0CY75KHsnGPURw6iZhTjdcli3B_ABwiPCY=",
    })
    await sampleEye
    .save();
    res.render("beautyList/eyePage.ejs", {sampleEye});
});

app.listen(port, () => {
    console.log(`Server listening on the ${port} port.`);
});

