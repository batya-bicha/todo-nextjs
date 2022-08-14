import React from 'react';
import { ITodo } from '../models';
import { useTodo } from '../untils';
import {
  StyledContainer,
  StyledPickAll,
  StyledInput,
} from '../styles/TodoInput.styled';
import axios from 'axios';



interface TodoInputProps {
  todos: ITodo[];
};



function TodoInput({ todos }: TodoInputProps) {
  const [todo, setTodo] = React.useState('');
  const [allTodoTrue, setAllTodoTrue] = React.useState(false);
  const { addTodo, selectAllTodos } = useTodo();


  const [newTodos, setNewTodos] = React.useState(todos);


  React.useEffect(() => {
    axios.get('http://localhost:3000/api/todos').then(res => setNewTodos(res.data.todos));

    const checkedTodos = todos.every(todo => todo.checked === true);
    setAllTodoTrue(checkedTodos);
  }, [todos]);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodo(value);
  };


  const addNewTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    return e.key === 'Enter' && todo.trim().length !== 0
      ? (axiosAddTodo({ description: todo }), setTodo(''))
      : null;
  };


  const selectTodos = () => {
    selectAllTodos();
  };





  //*
  const axiosAddTodo = async ({ description }: Omit<ITodo, 'id' | 'checked'>) => {
    axios.get('http://localhost:3000/api/todos').then(res => setNewTodos(res.data.todos));
    console.log(newTodos)


    const newId = newTodos?.length ? newTodos[newTodos.length - 1]?.id + 1 : 0;
    axios.post('http://localhost:3000/api/todos', { id: newId, description, checked: false })
      .then((res) => console.log(res.data))
      .catch(error => console.log(error));
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
