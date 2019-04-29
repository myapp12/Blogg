const mongoose = require('mongoose');

let mongoDB = 'mongodb://localhost/blog';
mongoose.connect(mongoDB, {useNewUrlParser : true});

let db = mongoose.connection;

db.on('error',console.error.bind(console,'Mongoose conection fail'));
db.once("open",()=>{console.log("Conected to mongoose")});

module.exports = mongoose;