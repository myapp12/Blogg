const postController = require("../controllers/postController.js")

module.exports = function(app) {
	app.get("/posts", postController.index)
	app.post("/posts/create", postController.create)
	app.put("/posts/:id", postController.update)
	app.get("/posts/:id", postController.show)
	app.delete("/posts/:id", postController.remove)
}
