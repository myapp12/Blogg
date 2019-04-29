const postController = require("../controllers/userController.js")

module.exports = function(app) {
	app.get("/posts", postController.index)
	app.post("/posts/create", userController.create)
	app.put("/posts/:id", userController.update)
	app.get("/posts/:id", userController.show)
	app.delete("/posts/:id", userController.remove)
}
