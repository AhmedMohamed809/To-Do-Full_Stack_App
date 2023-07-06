const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")
//middleware 
app.use(cors());
app.use(express.json);

// Routes 
app.listen(500,()=>{
    console.log("server has started >> port 5000 ");
})