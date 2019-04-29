
const mongoose = require('../db/mongoDB.js');

const Schema = mongoose.Schema;

const userSchema = Schema({
    email: String,
    password: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('User',userSchema);