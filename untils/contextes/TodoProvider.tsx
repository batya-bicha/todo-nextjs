import React from "react";
import { TodoContext, TodoContextProps } from "./TodoContext";
import { ITodo } from "../../models";
import axios from "axios";



interface TodoProviderProps {
  children: React.ReactNode;
};



export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [dataTodos, setDataTodos] = React.useState<ITodo[]>([]);

  const [todos, setTodos] = React.useState<ITodo[]>([]);
  const [todoForEdit, setTodoForEdit] = React.useState<ITodo['id']>(-1);
  const [activeFilter, setActiveFilter] = React.useState('all');



  //* API 
  React.useEffect(() => {
    axios('http://localhost:3000/api/todos')
      .then(res => setDataTodos(res.data.todos));
  }, []);



  //* API 
  const addDataTodo = ({ description }: Omit<ITodo, 'id' | 'checked'>) => {
    axios.get('http://localhost:3000/api/todos')
      .then(res => setDataTodos(res.data.todos));

    const newId = dataTodos?.length ? dataTodos[dataTodos?.length - 1]?.id + 1 : 0;

    axios.post('http://localhost:3000/api/todos', { id: newId, description, checked: false })
      .then(res => setDataTodos([...res.data.todos]));
  };


  const deleteDataTodo = (id: ITodo['id']) => {
    axios.delete(`http://localhost:3000/api/todos/${id}`)
      .then(res => res.data.todos);

    axios.get('http://localhost:3000/api/todos')
      .then(res => setDataTodos(res.data.todos));
  };



  const setFilter = (filter: string) => {
    setActiveFilter(filter);
  };


  const addTodo = ({ description }: Omit<ITodo, 'id' | 'checked'>) => {
    const newId = todos?.length ? todos[todos.length - 1]?.id + 1 : 0;
    setTodos([...todos, { id: newId, description, checked: false }]);
  };


  const checkTodo = (id: ITodo['id']) => {
    const checkedTodo = todos.map(todo => {
      return todo.id === id ? { ...todo, checked: !todo.checked } : todo;
    });

    setTodos(checkedTodo);
  };


  const changeTodo = (id: ITodo['id']) => {
    setTodoForEdit(id);
  };


  const deleteTodo = (id: ITodo['id']) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };


  const editTodo = (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], state: boolean) => {
    const modifiedTodo = todos.map(todo => (
      todo.id === id ? { id, description, checked } : todo
    ));

    return state ? null : setTodos(modifiedTodo.filter(todo => (todo.description.trim().length !== 0)));
  };


  const selectAllTodos = () => {
    const checkTodos = todos.every(todo => todo.checked === true);
    const checkedTodos = todos.map(todo => (
      {
        id: todo.id,
        description: todo.description,
        checked: checkTodos ? false : true,
      }
    ));
    setTodos(checkedTodos);
  };


  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => todo.checked !== true));
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

      addDataTodo,
      deleteDataTodo,
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

      addDataTodo,
      deleteDataTodo,
    ]
  );


  return <TodoContext.Provider value={value}> {children} </TodoContext.Provider>
};