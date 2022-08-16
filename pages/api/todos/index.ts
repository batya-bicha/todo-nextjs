// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ITodo } from '../../../models';
import { todos } from '../data/todos';


type Data = {
  todos: ITodo[];
}


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body , query} = req;

  switch (method) {
    case "GET":
      res.status(200).json({ todos })
      break;
    case "POST":
      todos.push(body);
      res.status(201).json({ todos })
      break;
    case "PUT":
      todos.push(body);
      res.status(201).json({ todos })
      break;
    case "PATCH":
      todos.push(body);
      res.status(201).json({ todos })
      break;
    default:
      console.log('NOTHING')
  }
}
