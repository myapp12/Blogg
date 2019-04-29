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
	}
}
