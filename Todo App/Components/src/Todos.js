import React from 'react'
import TODO from './Todo'

const Todos = (props) => {
    
  return (
    <div>
        {props.todos.map((todo,index)=>(
            <TODO key={index} todo={todo}/>
        ))}
    </div>
  )
}

export default Todos