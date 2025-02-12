const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const handleLogin = async (req,res) => {
    const {email , pwd} = req.body ;
    if(!email || !pwd) return res.status(400).json({"message": "username and password are required"});

    const foundUser = await User.findOne({ email: email}).exec();
    if(!foundUser) return res.sendStatus(401); //Unauthorized
    //evaluate password
    const match = await bcrypt.compare(pwd, foundUser.password);
    if(match) {
        const roles = Object.values(foundUser.roles).filter(Boolean);
        //create JWTs
        const accessToken = jwt.sign(
            {
            "UserInfo" : {
                "email":foundUser.email,
                "roles" : roles
                }
            },
            process.env.ACCESS_TOKEN,
            { expiresIn:'30m' }
        );

        const refreshToken = jwt.sign(
            {"email":foundUser.email},
            process.env.REFRESH_TOKEN,
            { expiresIn:'10d' }
        );
        //saving refresh token with current user
        foundUser.refreshToken = refreshToken;
        const result = await foundUser.save();

        res.cookie('jwt', refreshToken , {httpOnly : true ,sameSite: 'None' , 
        secure:true, maxAge :  30 * 24 * 60 * 60 * 1000});
        res.json({roles ,accessToken, result});
    } else {
        res.sendStatus(401);
    }
}

module.exports = {handleLogin}