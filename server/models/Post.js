const mongoose = require("../db/mongoDB.js")

const Schema = mongoose.Schema

const postSchema = Schema({
	title: String,
	description: String,
	email: String
})

module.exports = mongoose.model("Post", postSchema)
