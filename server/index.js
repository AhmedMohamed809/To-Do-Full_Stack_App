require("dotenv").config(); // to use .env file
const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db")
//middleware 
app.use(cors());
app.use(express.json()); // req.body
let port = process.env.PORT|| 5000;
// Routes//

//create todo 
app.post("https://server-todo-v1.onrender.com/todos",async(req,res)=>{
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
app.get("https://server-todo-v1.onrender.com/todos",async(req,res)=>{
    try {

        const alltodo = await pool.query("SELECT * FROM todo");
        res.json(alltodo.rows)
        
    } catch (err) {
        console.error(err.message)
    }
} )

//get a todo
app.get("https://server-todo-v1.onrender.com/todos/:id", async (req,res)=>{
    try {
        const todoID =Number(req.params.id);
        const filterTodo= await pool.query("SELECT * FROM todo WHERE todo_id= $1",[todoID]);
        res.json(filterTodo.rows)
    } catch (err) {
        console.error(err.message);
    }
})
//update a todo 
app.put("https://server-todo-v1.onrender.com/todos/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateTodo= await pool.query("UPDATE todo SET description =$1 WHERE todo_id =$2",[description,id]);
        res.json(`The todo ID number ${id} has been updated >`);
    } catch (err) {
        console.error(err.message)
    }
})
//delete a todo
app.delete("https://server-todo-v1.onrender.com/todos/:id",async (req,res)=>{
    try {
        const {id} = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
        res.json("todo was deleted !");
    } catch (err) {
        console.error(err.message)
    }
})
//
app.listen(port,()=>{
    console.log("server has started >> port 5000 ");
})