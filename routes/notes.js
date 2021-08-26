const router = require('express').Router();
const fs = require('fs');




router.get("/notes", (req, res) => {
    let notes = fs.readFileSync("../db/db.json")

})