import React from 'react';
import { useTodo } from '../untils';
import {
  StyledTodoFooter,
  StyledItemsLeft,
  StyledItemsFilters,
  StyledClearCompleted
} from '../styles/TodoFooter.styled';
import axios from 'axios';
import { ITodo } from '../models';



//* todos 
function TodoFooter() {
  const { todos, clearCompletedTodos, activeFilter, setFilter } = useTodo();
  const [dataTodos, setDataTodos] = React.useState<ITodo[]>([]);



  React.useEffect(() => {
    axios('http://localhost:3000/api/todos')
      .then(res => setDataTodos(res.data.todos));
  }, []);



  const counterTodosLeft = () => {
    const counter = dataTodos.filter(todo => todo.checked === false).length;
    return counter > 1 ? counter + ' items left' : counter + ' item left';
  };


  const checkTodosState = () => {
    return dataTodos.find(todo => todo.checked === true);
  };


  const clearCompleted = () => {
    clearCompletedTodos();
  };


  return (
    <StyledTodoFooter style={dataTodos.length ? {} : { 'display': 'none' }}>
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
