// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ITodo } from '../../models';
import { todos } from './data/todos';


type Data = {
  todos: ITodo[];
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    res.status(200).json({ todos })
  }

  if (req.method === 'POST') {
    const newTodo = req.body;
    // res.status(200).json(res)
    // res.status(200).json({todos})
    // res.status(200).send
    todos.push(newTodo);
  }
}
