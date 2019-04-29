const Posts = require("../models/Post.js")

module.exports = {
	create: async function(req, res) {
		try {
			const newPost = {
				title: req.body.title,
				description: req.body.description,
				email: req.body.email
			}
			// console.log(newUser);
			await Users.create(newUser, (err, newUser) => {
				res.json(newUser)
			})
		} catch (error) {
			console.log(error + "")
		}
	},
	login: async function(req, res) {
		try {
			await Users.findOne({ email: req.body.email }, (err, user) => {
				console.log(user)
				if (bcrypt.compareSync(req.body.password, user.password)) {
					res.send("1")
				} else {
					res.send("0")
				}
			})
		} catch (error) {
			console.log(error + "")
		}
	}
}
