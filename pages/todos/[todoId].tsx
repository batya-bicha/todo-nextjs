import React from 'react';
import { todos } from '../api/data/todos';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';


// function Todo({ todo }: InferGetStaticPropsType<typeof getStaticProps>) {
//   return (
//     <div>{todo}</div>
//   )
// }


// export default Todo;


// export const getStaticProps: GetStaticProps = async (context) => {
//   const { params } = context;
//   const { todoId } = params;

//   const todo = todos.find(todo => todo.id === parseInt(todoId))
//   console.log(todo)


//   return {
//     props: {
//       todo
//     }
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [
//       { params: { todoId: '1' } },
//       { params: { todoId: '2' } },
//       { params: { todoId: '3' } }
//     ],
//     fallback: false
//   }
// }
