import React,{useState} from 'react'
import TODOS from './Todos'
import NewTodo from './NewTodo'

const dummyTodos=["todo1","todo2"]
const Home = () => {
   const [todos,setTodos]=useState(dummyTodos);

   const handleNewTodo=(newTodo)=>{
    setTodos([...todos,newTodo])
   }
   
  return (
    <div>
        <NewTodo onTodo={handleNewTodo}/>
       <TODOS todos={todos} />
    </div>
  )
}

export default Home