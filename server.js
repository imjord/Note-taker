const express = require("express");
const app = express();
const notes  = require("./db/db")
const path = require("path");
const fs = require("fs");
const config = require("./db/db.json");



// middleware 
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming json data 
app.use(express.static(path.join(__dirname, '/public')));











// // WILDcard ROUTE to redirct randomness to home page
// app.get("/*", (req,res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));

// })





// // GET route to home page 
// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, './public/index.html'));

// })



// // GET route to notes html
// app.get("/notes", (req,res) => {
//     res.sendFile(path.join(__dirname, './public/notes.html'));
  

// })



// // post requests 

// app.post('/notes', (req, res) => {
//     // req.body is where our incoming content will be
//     console.log(req.body);
//     res.json(req.body);
//   });


// //  app.get("/notes", (req, res) => {
// //      
// //  })


app.listen(3001, () => {
    console.log("API server now on port 3001!")
})



