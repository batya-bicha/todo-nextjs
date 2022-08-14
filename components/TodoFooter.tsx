import React from 'react';
import { ITodo } from '../models';
import { useTodo } from '../untils';
import {
  StyledTodoFooter,
  StyledItemsLeft,
  StyledItemsFilters,
  StyledClearCompleted
} from '../styles/TodoFooter.styled';



interface TodoFooterProps {
  todos: ITodo[];
};




function TodoFooter({ todos }: TodoFooterProps) {
  const { clearCompletedTodos, activeFilter, setFilter } = useTodo();


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
        <div
          onClick={() => setFilter('all')}
          className={activeFilter === 'all' ? 'filterItem active' : 'filterItem'}>
          All
        </div>
        <div
          onClick={() => setFilter('active')}
          className={activeFilter === 'active' ? 'filterItem active' : 'filterItem'}>
          Active
        </div>
        <div onClick={() => setFilter('completed')}
          className={activeFilter === 'completed' ? 'filterItem active' : 'filterItem'}>
          Completed
        </div>
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
