import React from "react";
import { TodoContext, TodoContextProps } from "./TodoContext";
import { ITodo } from "../../models";
import axios from 'axios';



interface TodoProviderProps {
  children: React.ReactNode;
};



export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [todoForEdit, setTodoForEdit] = React.useState<ITodo['id']>(-1);
  const [activeFilter, setActiveFilter] = React.useState('all');



  React.useEffect(() => {
    axios.get('https://62fa4c36ffd7197707e9727e.mockapi.io/todos')
      .then(res => setTodos(res.data));
    console.log('PROVIDER')
  }, []);



  const setFilter = (filter: string) => {
    setActiveFilter(filter);
  }


  const changeTodo = (id: ITodo['id']) => {
    setTodoForEdit(id);
  };


  const addTodo = ({ description }: Omit<ITodo, 'id' | 'checked'>) => {
    const newId = todos?.length ? todos[todos.length - 1]?.id + 1 : 0;
    axios.post('https://62fa4c36ffd7197707e9727e.mockapi.io/todos', { description, checked: false, id: newId })
      .then(res => setTodos([...todos, res.data]));
  };

  //? mockAPI problems 
  const selectAllTodos = () => {
    const checkTodos = todos.every(todo => todo.checked === true);
    todos.map(todo => {
      const newTodo = {
        description: todo.description,
        checked: checkTodos ? false : true,
        id: todo.id,
      }
      axios.put(`https://62fa4c36ffd7197707e9727e.mockapi.io/todos/${todo.id}`, newTodo)
        .then(res => setTodos([res.data]))
    });
  };


  const clearCompletedTodos = () => {
    todos.map(todo => (
      todo.checked === true
        ? axios.delete(`https://62fa4c36ffd7197707e9727e.mockapi.io/todos/${todo.id}`)
        : null
    ))
  };


  const checkTodo = (id: ITodo['id']) => {
    todos.map(todo => (
      todo.id === id
        ? axios.put(`https://62fa4c36ffd7197707e9727e.mockapi.io/todos/${todo.id}`, { description: todo.description, checked: !todo.checked, id: todo.id })
        : null
    ));
  };


  const deleteTodo = (id: ITodo['id']) => {
    todos.filter(todo => (
      todo.id == id
        ? axios.delete(`https://62fa4c36ffd7197707e9727e.mockapi.io/todos/${todo.id}`)
        : null
    ));
  }

  //? mockAPI problems 
  const editTodo = (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked']) => {
    const modifiedTodo = todos.map(todo => (
      todo.id === id ? { id, description, checked } : todo
    ));
    return description.trim().length !== 0
      ? axios.put(`https://62fa4c36ffd7197707e9727e.mockapi.io/todos/${id}`, { description: description, checked: checked, id: id })
      : axios.delete(`https://62fa4c36ffd7197707e9727e.mockapi.io/todos/${id}`)
  };



  const value = React.useMemo(
    () => ({
      todos,
      todoForEdit,
      editTodo,
      checkTodo,
      deleteTodo,
      changeTodo,
      addTodo,
      selectAllTodos,
      clearCompletedTodos,
      activeFilter,
      setFilter,
    }),
    [
      todos,
      todoForEdit,
      editTodo,
      checkTodo,
      deleteTodo,
      changeTodo,
      addTodo,
      selectAllTodos,
      clearCompletedTodos,
      activeFilter,
      setFilter,
    ]
  );


  return <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
};