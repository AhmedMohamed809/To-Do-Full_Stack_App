import React ,{Fragment ,useEffect , useState} from 'react'

function ListTodo() {
    const [todos,setTodo] = useState([]);
    const getTodos = async()=>{
        try {
            const response = await fetch("http://localhost:5000/todos");
            const data =await response.json();
            setTodo(data);
        } catch (err) {
            console.error(err.message);
            
        }

    }
    useEffect(()=>{
        getTodos();
    },[])
  return (
    <Fragment>
        <table class="table mt-5  table-hover">
  <thead>
    <tr>
      
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo=>(

    <tr>
      <td>{todo.description}</td>
      <td>Edit</td>
      <td>Delete</td>
    </tr>
    ))}
    
  </tbody>
</table>
    </Fragment>
  )
}

export default ListTodo