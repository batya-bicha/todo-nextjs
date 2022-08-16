import React from 'react';
import { useTodo } from '../untils';
import {
  StyledContainer,
  StyledPickAll,
  StyledInput,
} from '../styles/TodoInput.styled';
import axios from 'axios';
import { ITodo } from '../models';



//* todos addTodo
function TodoInput() {
  const [todo, setTodo] = React.useState('');
  const [allTodoTrue, setAllTodoTrue] = React.useState(false);
  const { todos, addTodo, addDataTodo, selectAllTodos } = useTodo();
  const [dataTodos, setDataTodos] = React.useState<ITodo[]>([]);



  React.useEffect(() => {
    const checkedTodos = dataTodos.every(todo => todo.checked === true);
    setAllTodoTrue(checkedTodos);

    axios('http://localhost:3000/api/todos')
      .then(res => setDataTodos(res.data.todos));
  }, []);



  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };


  const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' && todo.trim().length !== 0
      ? (addDataTodo({ description: todo }), setTodo(''))
      : null;
  };


  const selectTodos = () => {
    selectAllTodos();
  };


  return (
    <StyledContainer>
      <StyledPickAll
        style={dataTodos.length ? {} : { 'visibility': 'hidden' }}
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
