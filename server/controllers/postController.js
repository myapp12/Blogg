const Posts = require("../models/Post.js")

module.exports = {
	create: async function(req, res) {
		try {
			const newPost = {
				title: req.body.title,
				description: req.body.description,
				comments: [],
				likes: [],
				email: req.body.email
			}

			let newPost = await Posts.create(newPost, (err, newPost));
			res.json(newPost)
		} catch (error) {
			res.status(500).send(error + "")
		}
	},







































































	index: async function(req,res){
		try {
			let posts = await Posts.find((err,posts));
			res.json(posts);
		} catch (error) {
			res.status(500).send(error + '');
		}
	},
	update: async function(req,res){
		try {
			await Posts.findOne({_id: req.params.id },(err,post)=>{
				post.title = req.body.title;
				post.description = req.body.description;
				let newPost = await post.save((err,newPost));
				res.json(newPost)
			})
		} catch (error) {
			res.status(500).send(error + '');
		}
	}
}
