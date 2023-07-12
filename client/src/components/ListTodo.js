import React ,{Fragment ,useEffect , useState} from 'react'

function ListTodo() {
    const getTodos = async()=>{
        try {
            const response = await fetch("http://localhost:5000/todos");
            const data =await response.json();
            console.log(data)
        } catch (err) {
            console.error(err.message);
            
        }

    }
    useEffect(()=>{
        getTodos();
    })
  return (
    <Fragment>
        <table class="table mt-5 table-dark table-hover">
  <thead>
    <tr>
      
      <th scope="col">Description</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    
    <tr>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</table>
    </Fragment>
  )
}

export default ListTodo