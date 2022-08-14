import TodoFooter from './TodoFooter';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { TodoProvider } from '../untils';
import { StyledTodo } from '../styles/Todo.styled';
import { ITodo } from '../models';


interface TodoProps {
  todos: ITodo[];
};


function Todo({ todos }: TodoProps) {
  return (
    <TodoProvider>
      <StyledTodo>
        <TodoInput todos={todos} />
        <TodoList todos={todos} />
        <TodoFooter todos={todos} />
      </StyledTodo>
    </TodoProvider>
  )
}


export default Todo;


//todo перепистаь на Next.js + requests*** 

//todo добавить плавную анимацию
