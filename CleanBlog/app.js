const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Post = require("./model/Post");

const app = new express();

//connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/cleanblog-test-db");

//TEMPLATE ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")

//MIDDLEWARES
app.use(express.static('CleanBlog/public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//description
const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

//ROUTES
app.get("/", async (req, res) => {
    const posts = await Post.find({});
    res.render("index", {
        posts,
        monthNames
    })
});

app.get("/posts/:id", async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render("post", {
        post,
        monthNames  
    })
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/add_post", (req, res) => {
    res.render("add_post")
});

app.post("/posts", async (req, res) => {
    await Post.create(req.body);
    res.redirect("/");
});


const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
});