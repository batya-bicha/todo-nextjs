import React from 'react'
import { useTodo } from '../untils';
// import { NavLink } from 'react-router-dom';
import {
  StyledTodoFooter,
  StyledItemsLeft,
  StyledItemsFilters,
  StyledClearCompleted
} from '../styles/TodoFooter.styled';



function TodoFooter() {
  const { todos, clearCompletedTodos } = useTodo();


  const counterTodosLeft = () => {
    const counter = todos.filter(todo => todo.checked === false).length;
    return counter > 1 ? counter + ' items left' : counter + ' item left';
  };


  const checkTodosState = () => {
    return todos.find(todo => todo.checked === true);
  };


  const clearCompleted = () => {
    clearCompletedTodos();
  };


  return (
    <StyledTodoFooter style={todos.length ? {} : { 'display': 'none' }}>
      <StyledItemsLeft>{counterTodosLeft()}</StyledItemsLeft>
      <StyledItemsFilters>
        {/* <NavLink
          to='/'
        > */}
        <div>All</div>
        {/* </NavLink> */}
        {/* <NavLink
          to='/active'
        > */}
        <div>Active</div>
        {/* </NavLink> */}
        {/* <NavLink
          to='/completed'
        > */}
        <div>Completed</div>
        {/* </NavLink> */}
      </StyledItemsFilters>
      <StyledClearCompleted
        onClick={() => clearCompleted()}
        style={checkTodosState() ? {} : { 'visibility': 'hidden' }}
      >
        Clear completed
      </StyledClearCompleted>
    </StyledTodoFooter>
  )
}


export default TodoFooter;
