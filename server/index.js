const express = require("express")
const app = express()
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongose = require("./db/mongoDB")
const PORT = process.env.PORT || 3000

app.use(morgan("dev")) // show all url request
app.use("/assets", express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

require("./routers/user.js")(app)
require("./routers/post.js")(app)

app.listen(PORT, () => {
	console.log("Application listening on PORT: " + PORT)
})
