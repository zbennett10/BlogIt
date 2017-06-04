var app = require("./server");
var PostModel = require('./models/Post');


module.exports = function(app) {

    app.get('/posts', function(req, res) {
        PostModel.find({})
            .then((posts) => {
                res.json(posts);
            })
            .catch(error => {
                console.log(error);
            });
    });

    
    app.post('/post', function(req,res) {
        var newPost = new PostModel(req.body);
        newPost.save()
            .then(result => {
                console.log(result);
            })
            .catch(error => console.log(error));

    });

}

