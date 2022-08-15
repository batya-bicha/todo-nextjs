import TodoFooter from './TodoFooter';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TodoProvider } from '../untils';
import { StyledTodo } from '../styles/Todo.styled';



function Todo() {
  return (
    <TodoProvider>
      <StyledTodo>
        <TodoInput />
        <TodoList />
        <TodoFooter />
      </StyledTodo>
    </TodoProvider>
  )
}


export default Todo;


//todo перепистаь на Next.js + requests*** 

//todo добавить плавную анимацию
