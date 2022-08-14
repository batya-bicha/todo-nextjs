import React, { RefObject } from 'react';
import { ITodo } from '../models';
import {
  StyledTodoItem,
  StyledContainer,
  StyledCheckOut,
  StyledInput,
  StyledDeleteTodo,
} from '../styles/TodoItem.styled';



interface TodoItemProps {
  todo: ITodo;
  checkTodo: (id: ITodo['id']) => void;
  deleteTodo: (id: ITodo['id']) => void;
  changeTodo: (id: ITodo['id']) => void;
  todoForEdit: ITodo['id'];
  editTodo: (id: ITodo['id'], description: ITodo['description'], checked: ITodo['checked'], state: boolean) => void;
  useClickOutside: <T extends HTMLElement = HTMLElement>(
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
  ) => void;
};



function TodoItem({ todo, checkTodo, deleteTodo, changeTodo, todoForEdit, editTodo, useClickOutside }: TodoItemProps){
  const [focus, setFocus] = React.useState(false);
  const [toChange, setToChange] = React.useState(todoForEdit === todo.id);
  const [value, setValue] = React.useState(todo.description);
  const [forEditTodo, setForEditTodo] = React.useState({ id: todo.id, description: value, checked: todo.checked, toChangeTodo: false });
  const clickRef = React.useRef(null);


  React.useEffect(() => {
    setToChange(todoForEdit === todo.id);
  }, [todoForEdit]);


  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    editTodo(todo.id, value, todo.checked, toChange);
    setForEditTodo({ id: todo.id, description: value, checked: todo.checked, toChangeTodo: false });
  };


  useClickOutside(clickRef, setToChange, toChange, forEditTodo, editTodo);


  const changeTodoDescription = () => {
    setToChange(true);
    changeTodo(todo.id);
  };


  return (
    <StyledTodoItem
      ref={clickRef}
      onMouseOver={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
    >
      <StyledContainer>
        <StyledCheckOut
          onClick={() => checkTodo(todo.id)}
          className={todo.checked ? 'active' : ''}
        >
          {todo.checked && <img src="./check.svg" alt="check" />}
        </StyledCheckOut>
        <StyledInput
          onDoubleClick={changeTodoDescription}
          onChange={(e) => onChange(e)}
          className={todo.checked ? 'checked' : 'test'}
          type="text"
          readOnly={!toChange}
          value={value}
        />
        <StyledDeleteTodo
          onClick={() => deleteTodo(todo.id)}
          style={focus ? {} : { 'display': 'none' }}
        >
        </StyledDeleteTodo>
      </StyledContainer>
    </StyledTodoItem>
  )
}


export default TodoItem;
