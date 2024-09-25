const User = require('../models/User');
const bcrypt = require('bcrypt');

const handleNewUser = async (req , res) => {
    const {email ,firstName , lastName,  pwd} = req.body ;
    if(!email) {
        return res.status(400).json({"message": "Email is required"});
    }
    else if(!firstName) {
        return res.status(400).json({"message": "firstName is required"});
    }
    else if(!lastName) {
        return res.status(400).json({"message": "lastname is required"});
    }
    else if(!pwd) {
        return res.status(400).json({"message": "password is required"});
    }

    //check for duplicate usernames in th database
    const duplicate = await User.findOne({ email: email}).exec();

    if(duplicate) return res.sendStatus(409);//conflict
    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        //create and store the new user
        const result = await User.create({
            "email" : email ,
            "firstName" : firstName,
            "lastName" : lastName,
            "password" : hashedPwd
        });
        
        console.log(result);

        res.status(201).json(result);
    } catch(err) {
        res.status(500).json({'message': err.message})
    }
}

const updateUserRole = async (req, res) => {
    const { userId, role } = req.body;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Merge the new role with existing roles
        const updatedRoles = { ...user.roles, 'Artisan': role };

        // Update user roles
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $set: { roles: updatedRoles } },
            { new: true, upsert: true } // upsert ensures document is created if it doesn't exist
        );

        res.status(200).json({ success: `User roles updated`, user: updatedUser });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


module.exports = {handleNewUser, updateUserRole};

