const mongoose = require('mongoose');
const bodyparser = require("body-parser");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
}
console.log("we are connected")
const contactSchema = new mongoose.Schema({
    name: String
  });
  const Contact = mongoose.model('Kitten', contactSchema);
  app.post('/contact', (req, res)=>{
    var myData = new Contact(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
})






// const kittySchema = new mongoose.Schema({
//     name: String
//   });
//   const Kitte = mongoose.model('Kitten', kittySchema);
//   const silence = new Kitte({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
// kittySchema.methods.speak = function speak() {
//     const greeting = this.name
//       ? "Meow name is " + this.name
//       : "I don't have a name";
//     console.log(greeting);
//   };
  
//   const Kitten = mongoose.model('Kitten', kittySchema);
//   const fluffy = new Kitten({ name: 'fluffy' });
// // fluffy.speak(); // "Meow name is fluffy"
// fluffy.save();
// // fluffy.speak();
// const kittens = Kitten.find();
// console.log(kittens);
// Kitten.find({ name:kittens });