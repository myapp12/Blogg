const postController = require("../controllers/postController.js")

module.exports = function(app) {
	// app.get("/posts", postController.index)
	app.post("/posts/create", postController.create)
	// app.put("/posts/:id", userController.update)
	// app.get("/posts/:id", userController.show)
	// app.delete("/posts/:id", userController.remove)
}
