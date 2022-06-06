const express =require('express')
const app=express()
const db=require('./db/db')
const user=require('./routes/user')
const category=require('./routes/categoryRoutes')
const product=require('./routes/productRoutes')
const order=require('./routes/orderRoutes')
const logger=require('./logs/logger')
const dotenv = require('dotenv');
dotenv.config();
//console.log(`Your port is ${process.env.PORT}`)
app.use(express.static('static'))
let port = process.env.PORT||4000;
//const port=3000;
db._connect()
app.use(express.json())
app.use('/api/user',user);
app.use('/api/category',category);
app.use('/api/product',product);
app.use('/api/order',order);
app.use('/',(req,res)=> send(res.redirect('html/PageNotFound.html')));
app.use((err,req,res,next)=>{
    logger.error(err.message)
    console.log(err)
    next()
})
console.log("ruuuun")
app.listen(port,()=>logger.info("server is up"))