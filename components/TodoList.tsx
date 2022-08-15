import React, { RefObject } from 'react';
import TodoItem from './TodoItem';
import { ITodo } from '../models';
import { useTodo } from '../untils';
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
  const { todos, activeFilter } = useTodo();


  const filterTodos = () => {
    return todos.filter(todo =>
      activeFilter === 'all' ? todo
        : activeFilter === 'active' ? todo.checked === false
          : activeFilter === 'completed' ? todo.checked === true
            : {});
  };


  return (
    <StyledSection>
      <ul>
        {filterTodos().map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            useClickOutside={useClickOutside}
          />
        ))}
      </ul>
    </StyledSection>
  )
}


export default TodoList;
