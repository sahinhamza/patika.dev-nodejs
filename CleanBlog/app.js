const express = require("express");
const ejs = require("ejs");
const path = require("path");

const app = new express();

//TEMPLATE ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs")

//MIDDLEWARES
app.use(express.static('CleanBlog/public'));

//ROUTES
app.get("/", (req, res) => {
    res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about")
});

app.get("/add_post", (req, res) => {
    res.render("add_post")
});

const port = 3000;
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
});