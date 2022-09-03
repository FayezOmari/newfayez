var express=require('express')
var app=express()
var path =require('path')
var expresslayout = require('express-ejs-layouts')
var indexRouter = require('./routes/index')
var registerRouter = require('./routes/register')



app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', './layoutFl/layout')
app.set('layout registerFl', false)
app.set(express.urlencoded({extended:false}))
app.set(express.json())



app.use(express.static(path.join(__dirname, 'public')))
app.use(expresslayout)
app.use('/', indexRouter)
app.use('/register', registerRouter)
app.listen(3000)
module.exports=app
