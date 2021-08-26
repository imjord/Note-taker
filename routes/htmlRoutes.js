const router = require('express').Router();
const path = require("path");


// GET route to home page 
router.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));

})



// GET route to notes html
router.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  

})



module.exports = router;