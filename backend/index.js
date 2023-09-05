
const express = require("express")  //importing express 

const cors = require("cors");   //importing cors
const bodyParser = require("body-parser"); // importing bodyparser
require("dotenv").config(); // importing and using dotenv npm library to read data from .env file

const allRoutes=require("./routes/routes.js")  // importing routes
const app= express()  //using express 
const port= process.env.PORT ||8080       

const {sequelize} = require('./models/index.js')
app.use( bodyParser.urlencoded({ extended: false }) );      // using bodyparser
app.use( bodyParser.json() );   // using bodyparser
app.use( cors() );   // using cors for cross origin requests

sequelize.sync({ force: true }).then(() => {
    console.log("Sequelize has synchronized the models to the database");
}).catch((err) => {
    console.log(err);
});



app.get("/",(req,res)=>{
    res.send("made with ❤️ from Anish")     //base api
})

app.use("/api", allRoutes);     //middleware 
app.listen(port,()=>{
    console.log(`server is up on :${port}`)   //execution of express with particuler port
})
