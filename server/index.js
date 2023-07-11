const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")
//middleware 
app.use(cors());
app.use(express.json()); // req.body

// Routes//

//create todo 
app.post("/todos",async(req,res)=>{
try {
    const {description}=req.body;
    const newTodo= await pool.query(
    "INSERT INTO todo (description) VALUES($1) RETURNING *",
    [description]
    );
    res.json(newTodo.rows[0]);
} catch (err) {
    console.error(err.message);
}
})
// get all todo 
app.get("/todos",async(req,res)=>{
    try {

        const alltodo = await pool.query("SELECT * FROM todo");
        res.json(alltodo.rows)
        
    } catch (err) {
        console.error(err.message)
    }
} )

//get a todo
app.get("/todos/:id", async (req,res)=>{
    try {
        const todoID =Number(req.params.id);
        const filterTodo= await pool.query("SELECT * FROM todo WHERE todo_id= $1",[todoID]);
        res.json(filterTodo.rows)
    } catch (err) {
        console.error(err.message);
    }
})
//update a todo 

//delete a todo
app.listen(5000,()=>{
    console.log("server has started >> port 5000 ");
})