

const userController = require('../controllers/userController.js');


module.exports = function(app){

    app.post('/register',
        userController.register);

    app.post('/login',userController.login);
}