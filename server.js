const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


const htmlRoutes = require("./routes/htmlRoutes");
const noteRoutes = require("./routes/noteRoutes");


// middleware 
app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming json data 
app.use(express.static('public'));







// routes 
app.use("/", htmlRoutes);
app.use("/api", noteRoutes)




app.listen(PORT, () => {
    console.log("API server now on port 3001!")
})



