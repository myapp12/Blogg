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

	removeComment: async function(req, res) {
		try {
			let post = await Posts.findById(req.params.id)
			let commentPosition = post.comments.indexOf({ _id: req.body.params })
			if (commentPosition != -1) {
				post.comments.splice(commentPosition, 1)
			}
			res.json(post.comments)
		} catch (error) {
			res.send(error + "")
		}
	},

	indexComment: async function(req, res) {
		try {
			let post = await Posts.findById(req.params.id)
			let postComments = post.comments
			res.json(postComments)
		} catch (error) {
			res.send(error + "")
		}
	}
}
