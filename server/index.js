const express = require("express");
const app = express();
const cors = require("cors")

//middleware 
app.use(cors());

app.listen(500,()=>{
    console.log("server has started >> port 5000 ");
})