const express = require('express')
const app = express()
const fs = require('fs')
const path = require('path');
const port = 80
const mongoose = require('mongoose');
const bodyparser = require("body-parser");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
app.use('/static', express.static('static'));//for serving static files
app.use(express.urlencoded())

app.set('view engine', 'pug')// set template engine as pug//now you can see source code and typle localhost/demo

app.set('views', path.join(__dirname, 'views'));//set the views directory

app.get("/index", (req, res) => {
    res.status(200).render('index', { title: 'are vabita', content: 'kya pdh rahi ho' });
})// our pug demo endpoint

//saving data to mongodb
var formschema = new mongoose.Schema({
    name: String
});
var forms = mongoose.model('forms', formschema);

// var formdoc = new forms({ name: 'formdoc' });
// console.log(formdoc.name);

app.post('/index', (req, res) => {
    var myData = new forms(req.body);
    myData.save().then(() => {
        res.send("This item has been saved to the database")
    }).catch(() => {
        res.status(400).send("item was not saved to the databse")
    })
})



    // app.post('/', (req, res)=>{
    //     names = req.body.names
    //     rollno = req.body.rollno
    //     email = req.body.email
    //     events = req.body.event

    // let outputToWrite = `the name of the client is ${names}, rollno is ${rollno}, event participated is ${events},email is: ${email}`
    // fs.writeFileSync('output.txt', outputToWrite)
    // const params = { 'message': 'Your form has been submitted successfully' }
    // res.status(200).render('index.pug', params);

    app.listen(port, () => {
        console.log(`the app started at port ${port}`)
    })

