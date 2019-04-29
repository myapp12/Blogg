const mongoose = require("../db/mongoDB.js")

const Schema = mongoose.Schema

const postSchema = Schema({
	title: String,
	description: String,
	comments: [
		{
			email: String,
			content: String
		}
	],
	likes: [
		{
			email: String
		}
	],
	email: String
})

module.exports = mongoose.model("Post", postSchema)
