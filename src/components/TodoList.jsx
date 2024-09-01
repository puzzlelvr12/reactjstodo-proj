import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList(props) {
  const {todos, handleDeleteTodo} = props
  return (//this is what should be rendered on the page "return"
    <ul className='main'>
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard {...props} key={todoIndex} index=
          {todoIndex}>
                <p>{todo}</p>
          </TodoCard>

        )
      })}
      </ul>
  )
}
//map iterates and returns 
//in this case the component returns a unordered list (ul)
//ul contain the <li> list items generated from the todo array