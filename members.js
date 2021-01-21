const express = require('express')
const router = express.Router()
const uuid = require('uuid')
const members = require('../../main/Memebers')



//get all memebers from ./public/Members
router.get('/', (req, res) => {
    res.json(members)
});
//get single members
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(404).json({ notfound: `Not found ${req.params.id}` });
    }
});
// Post req to create a member
router.post('/',(req,res)=>{
    const newMember ={
        id: uuid.v4(),
        name: req.body.name,
        age: req.body.age,
    }

    if(!newMember.name || !newMember.age){
        return res.status(400).json({msg:'please enter age or name'});
    }

members.push(newMember);
res.json(members);
});


module.exports = router;