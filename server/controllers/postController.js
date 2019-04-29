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

			await Posts.create(newPost, (err, newPost) => {
				res.json(newPost)
			})
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
	}
}
