import React from 'react';
import { useTodo } from '../untils';
import {
  StyledContainer,
  StyledPickAll,
  StyledInput,
} from '../styles/TodoInput.styled';




function TodoInput() {
  const [todo, setTodo] = React.useState('');
  const [allTodoTrue, setAllTodoTrue] = React.useState(false);
  const { todos, addTodo, selectAllTodos } = useTodo();


  React.useEffect(() => {
    const checkedTodos = todos.every(todo => todo.checked === true);
    setAllTodoTrue(checkedTodos);
  }, [todos]);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };


  const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' && todo.trim().length !== 0
      ? (addTodo({ description: todo }), setTodo(''))
      : null;
  };


  const selectTodos = () => {
    selectAllTodos();
  };


  return (
    <StyledContainer>
      <StyledPickAll
        style={todos.length ? {} : { 'visibility': 'hidden' }}
        className={allTodoTrue ? 'allTodoTrue' : ''}
        onClick={() => selectTodos()}
      >
      </StyledPickAll>
      <StyledInput
        onChange={onChange}
        onKeyDown={addNewTodo}
        value={todo}
        type="text"
        placeholder='Write something :)'
      />
    </StyledContainer>
  )
}


export default TodoInput;
