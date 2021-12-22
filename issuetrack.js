const { query } = require('express');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Issue = require('../models/issuemodel');

router.post = (req, res, next) => {
    const newIssue = new Issue({
        _id: new mongoose.Types.ObjectId(),
        issuetitle: req.body.issueTitle,issueDetails: req.body.issueDet,issueStatus: req.body.issueStatus,
        createdOn: Date.now(),
        updatedOn: Date.now(),
        createdBy: req.userId,
        modifiedBy: req.userId
    });
    newIssue
        .save()
        .then(result => {
         res.status(200).json({success: true,message: "Issue Added",newIssue: result
            });
        })
        .catch(error => {
            console.log(`Error!: ${error}`);
            res.status(500).json({success: false,error: error
            });
        });
};
router.delete(req,res)
{
    try{
        const  issues=await issuetracker.findByIdAndRemove({ _id :req.user_id});
        if(!user){
            return res.status(404).send();
        }
        res.send(user)
    }catch(e){
        res.status(500).send();
    }
}
router.get(req,res)
{
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
router.get(req,res,issue.id)
{
    try {
        const issues = await Issue.find({id:query})
            .populate({path :'created_By', select: 'username -_id',}) 
            .populate({path :'updated_By', select: 'username -_id',}).exec()
        if(!issues){
            res.status(404).send();
            
        }
        res.send(issues)
    } 
    catch (error) {
        res.status(500).send()
    }
}
router.get(req,res,issueStatus)
{
    try {
        const issues = await Issue.find({issueStatus:query})
            .populate({path :'created_By', select: 'username -_id',}) 
            .populate({path :'updated_By', select: 'username -_id',}).exec()
        if(!issues){
            res.status(404).send();
            
        }
        res.send(issues)
    } 
    catch (error) {
        res.status(500).send()
    }
}
