
const bcrypt = require('bcrypt-nodejs');
const Users = require('../models/User.js');


module.exports = {
    register : async function(req,res){
        try {
            let hashPassword = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(8), null);
            // console.log(hashPassword);
            const newUser = {
                email: req.body.email,
                password: hashPassword,
                firstName: req.body.firstName,
                lastName: req.body.lastName
            }
            // console.log(newUser);
            await Users.create(newUser,(err,newUser)=>{
                res.json(newUser);
            });
        } catch (error) {
            console.log(error + '');
        }
    },
    login: async function(req,res){
        try {
            await Users.findOne({email: req.body.email},(err,user) => {
                console.log(user);
                if(bcrypt.compareSync(req.body.password, user.password)){
                    res.send("1");
                }else{
                    res.send("0");
                }
            })
        } catch (error) {
            console.log(error + '')
        }
    }

}