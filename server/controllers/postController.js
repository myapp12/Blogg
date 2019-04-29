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

			let newPost = await Posts.create(newPost);
			res.json(newPost)
		} catch (error) {
			res.status(500).send(error + "")
		}
	},

	remove: async function(req, res) {
		try {
			const post = await Posts.findByIdAndDelete({ _id: req.params.id })
			res.json({
				delPost: post
			})
		} catch (error) {
			res.status(500).send({
				err: "Đã có lỗi xảy ra khi bạn xóa bài viết"
			})
		}
	},

	index: async function(req,res){
		try {
			let posts = await Posts.find();
			res.json(posts);
		} catch (error) {
			// console.log(err);
			res.status(500).send(error + '');
		}
	},
	update: async function(req,res){
		try {
			let post = await Posts.findOne({_id: req.params.id })
			post.title = req.body.title;
			post.description = req.body.description;
			let newPost = await post.save((err,newPost));
			res.json(newPost);
		} catch (error) {
			res.status(500).send(error + '');
		}
	},

	show: async function(req, res) {
		try {
			const post = await Posts.findById(req.params.id)
			res.json(post)
		} catch (error) {
			res.status(500).send({
				err: "Đã có lỗi xảy ra khi bạn xem chi tiết bài viết"
			})
		}
	}
}
