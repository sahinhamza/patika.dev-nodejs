const Post = require("../model/Post");

//description
const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

exports.getAllPosts = async (req, res) => {
    const posts = await Post.find({});
    res.render("index", {
        posts,
        monthNames
    })
}

exports.getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render("post", {
        post,
        monthNames
    })
}

exports.createPost = async (req, res) => {
    await Post.create(req.body);
    res.redirect("/");
}

exports.updatePost = async (req, res) => {
    const post = await Post.findById(req.params.id);
    post.title = req.body.title;
    post.detail = req.body.detail;
    post.save();
    res.redirect(`/posts/${req.params.id}`);
}

exports.deletePost = async (req, res) => {
    const post = await Post.findByIdAndRemove(req.params.id);
 
    res.redirect("/");
}