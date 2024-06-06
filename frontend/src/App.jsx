import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Createtodo } from './Createtodo'
import { Todos } from './Todos'
/*put that components in inside the 
// state variable */
function App() {
  const [todos, setTodos ] = useState([]);

  //conncting to BE
  fetch("http://localhost:3026/todos")
  .then(async function(res){
    const json =await res.json()
    setTodos(json.todos)
  })  
  


  return (
    <>
      <div>
      <Createtodo/>
      <Todo todos={[
        {
          title:"bla bla ",
          description: "nan ogalla ",
          completed: false,
        }
        ]}/>
      </div>
      
       
    </>
  )
}

export default App
