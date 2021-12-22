const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();

//Creating new user
router.post('/', async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    // Check if this user already exists
    let user = await User.findOne({ email: req.body.email });
    if (user) {
        return res.status(400).send('That user already exisits!');
    } else {
        // Insert the new user if they do not exist yet
        user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'name', 'email']));
        res.send(user);
    }
});
// Update
router.update(async (req, res) => {
    try {
        const name=req.name;
        const {name,email,password}=req.body;
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id ${id}`);
        const updatedUser={name,email,password:id};
        await User.findByIdAndUpdate(id,updatedUser,{new :true});
        res.json(updatedUser);
    } catch (e) {
        res.status(400).send(e)
    }
}
)
  
  // Delete
  router.delete(async (req, res) => {
    try{
        const  user=await User.findByIdAndRemove({ _id :req.user_id});
        if(!user){
            return res.status(404).send();
        }
        res.send(user)
    }catch(e){
        res.status(500).send();
    }
  })
   //get all
   router.get = async (req, res, next) => {
    try{
        const users=await User.find({})
        if(!users){
           res.status(404).send();
        }
        res.send(users)
    }
    catch(error){
        res.status(500).send()
    }
}


module.exports = router; 
 
 
