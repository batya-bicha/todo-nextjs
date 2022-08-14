import React, { RefObject } from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '../models';
import { useTodo } from '../untils';
// import { useParams } from 'react-router-dom';
import { StyledSection } from '../styles/TodoList.styles';



const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: (arg: boolean) => void,
  toChange: boolean,
  forEditTodo: {
    id: ITodo['id'],
    description: ITodo['description'],
    checked: ITodo['checked'],
    toChangeTodo: boolean,
  },
  editTodo: (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], state: boolean) => void,
) => {
  const handleClick = (e: Event) => {
    const { id, description, checked, toChangeTodo } = forEditTodo;
    const el = ref?.current;
    return toChange
      ? (el && !el.contains(e?.target as Node))
        ? (editTodo(id, description, checked, toChangeTodo), callback(false))
        : null
      : null;
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};




function TodoList() {
  const { todos, todoForEdit, checkTodo, deleteTodo, changeTodo, editTodo } = useTodo();
  // const params = useParams().id;


  const filterTodos = () => {
    return todos
    // return todos.filter(todo =>
    //   params === undefined ? todo
    //     : params === 'active' ? todo.checked === false
    //       : params === 'completed' ? todo.checked === true
    //         : {});
  };


  return (
    <StyledSection>
      <ul>
        {filterTodos().map(todo => (
          <TodoItem
            key={todo.id}
            checkTodo={checkTodo}
            deleteTodo={deleteTodo}
            changeTodo={changeTodo}
            todo={todo}
            todoForEdit={todoForEdit}
            editTodo={editTodo}
            useClickOutside={useClickOutside}
          />
        ))}
      </ul>
    </StyledSection>
  )
}


export default TodoList;
