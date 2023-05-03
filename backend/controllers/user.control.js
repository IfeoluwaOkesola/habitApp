const mongoose = require ('mongoose')
const { user } = require("../models/user.model");
const bcrypt = require('bcryptjs');
const saltRounds = 10;
const dotenv = require ('dotenv');
const { createUserService, findUserService } = require("../service/user.service");
const { createToken, maxAge } = require("../utils/createToken");
dotenv.config()

const secret = process.env.SECRET

const registerUser = async (req,res)=> {
    const{fullname, email, password} = req.body;
try {
    if(fullname && email && password){
        const emailCheck = await findUserService({email})
        if (emailCheck){
            const hash = bcrypt.hashSync(password, saltRounds);
            const result = await createUserService({
                username,
                email,
                password: hash,

            })
            if(result){
                res.status(200).json({message: result});
            }else{
                res.status(400).json({message: 'user not created'})
            }
        }
    }
} catch (error) {
    res.status(400).json({error});
}
    
}

module.exports = {registerUser}