var express=require('express')
var router=express.Router()

router.get('/', function(req,res,next){
    res.render('./registerFl/register', {layout: './registerFl/register'})
})
module.exports=router