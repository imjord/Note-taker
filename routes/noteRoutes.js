const router = require('express').Router();
const fs = require('fs');
const path = require("path");



    router.get("/notes", (req, res) =>{
        let notes = fs.readFileSync("db/db.json")  // read our data in db.json
         notes = JSON.parse(notes); // parse the data to javascript object.
        res.json(notes);              // respond with the object

    })




    router.post("/notes", (req,res) => {
        let notes = fs.readFileSync("db/db.json"); // assigning data into a var to be able to have new body pushed to it
         notes = JSON.parse(notes); // parse the data to javascript object.

         req.body.id = notes.length.toString(); // assign id to length of the notes array



        let userNotes = req.body;   // user input is the request body 
        console.log(req.body);    // shows an object with title and text 
        notes.push(userNotes);   // push the user notes into the notes object

        


        fs.writeFileSync(path.join(__dirname, "../db/db.json"),
        JSON.stringify(notes, null, 2)
        );
        res.json(notes) // respond with notes object 


    })
// use write file to db json then stringify the new user notes 









module.exports = router;