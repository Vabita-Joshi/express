const express=require('express')
const app=express()
const path=require('path');
const port=80

//for serving static files
app.use('/static',express.static('static'));

// set template engine as pug//now you can see source code and typle localhost/demo
app.set('view engine','pug')

//set the views directory
app.set('views',path.join(__dirname,'views'));

// our pug demo endpoint
app.get("/demo",(req,res)=>{
    res.status(200).render('demo',{title:'hey vabita',message:'are vabita ye kya kiya tumne'});
})


app.get('/',(req,res)=>{
    res.send("this is our first express app")
});
app.get('/about',(req,res)=>{
    res.send("this is our first and first express app")
});
app.get('/not',(req,res)=>{
    res.status(404).send("this is not found")
});
app.listen(port,()=>{
    console.log(`the app started at port ${port}`)
})