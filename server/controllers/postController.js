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

			let post = await Posts.create(newPost)
			res.json(post)
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

	index: async function(req, res) {
		try {
			let posts = await Posts.find()
			res.json(posts)
		} catch (error) {
			// console.log(err);
			res.status(500).send(error + "")
		}
	},
	update: async function(req, res) {
		try {
			let post = await Posts.findOne({ _id: req.params.id })
			console.log(post)
			post.title = req.body.title
			post.description = req.body.description
			let newPost = await post.save()
			res.json(newPost)
		} catch (error) {
			res.status(500).send(error + "")
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
	},

	like: async function(req, res) {
		try {
			const post = await Posts.findById(req.params.id)
			let lengthLikes = post.likes.length
			for (var i = 0; i < lengthLikes; ++i) {
				if (post.likes[i].email === req.body.email) {
					post.likes.splice(i, 1)
					break
				}
			}
			if (i === lengthLikes) {
				post.likes.push({ email: req.body.email })
			}
			let newPost = await post.save()
			res.json(newPost)
		} catch (error) {
			res.status(500).send({
				err: "Đã có lỗi xảy ra khi bạn xem chi tiết bài viết"
			})
		}
	},

	indexLike: async function(req, res) {
		try {
			let post = await Posts.findById(req.params.id)
			res.json(post.likes)
		} catch (error) {
			res.send(error + "")
		}
	},

























	


	createComment : async function(req,res){
		try {
			let post = await Posts.findById(req.params.id);
			let newComment = {
				email : req.body.email,
				content : req.body.content
			}
			post.comments.push(newComment);
			let newPost = await post.save();
			res.json(newPost);

		} catch (error) {
			res.send(error + '')
		}
	},
	updateComment: async function(req,res){
		try {
			let post = await Posts.findById(req.params.id);
			const lengthComments = post.comments.length;
			for (let i = 0 ; i < lengthComments; ++i){
				// console.log(post.comments[i]._id)
				if(post.comments[i]._id == req.params.idComment){
					post.comments[i].content = req.body.content;
					// console.log(post.comments[i].content);
					break;
				}
			}
			
			let newPost = await post.save();
			res.json(newPost);

		} catch (error) {
			res.send(error + '')
		}
	}
}
