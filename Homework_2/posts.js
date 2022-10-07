const posts = [
    { "msg": "posts1" },
    { "msg": "posts2" },
    { "msg": "posts3" },
];

const listPosts = () => {
    posts.map(post => console.log(post.msg));
};

const addPost = (newPost) => {
    return new Promise(resolve => {
        posts.push(newPost);
        resolve("new post added.");
    });
};

async function showPosts() {
    try{
        listPosts();
        await addPost({ "msg": "posts4" });
        console.log("\n *****new post added***** \n");
        listPosts();
    }catch(err){
        console.log(err)
    }
}

showPosts();
