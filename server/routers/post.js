const postController = require("../controllers/postController.js")

module.exports = function(app) {
	app.get("/posts", postController.index)
	app.post("/posts/create", postController.create)
	app.put("/posts/:id", postController.update)
	app.get("/posts/:id", postController.show)
	app.delete("/posts/:id", postController.remove)

	app.put("/posts/:id/add_comment", postController.createComment)
	app.put("/posts/:id/update_comment/:idComment", postController.updateComment)
	// app.put("/posts/:id/add_comment/:idComment", postController.removeComment)
	// app.get("/posts/:id/add_comment", postController.indexComment)

	app.post("/posts/:id/like", postController.like)
	app.get("/posts/:id/like", postController.indexLike)
}
