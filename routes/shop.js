const express=require('express');
const router=express.Router();

router.get('/',(req,res,next) => {
    res.send('<h1>welcome to node.js</h1>');
})
module.exports=router;