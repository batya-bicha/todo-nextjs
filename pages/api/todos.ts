// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { ITodo } from '../../models';
import { todos } from './data/todos';



type Data = {
  todos: ITodo[];
};







export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method, body } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ todos });
      break;
    case "POST":
      todos.push(body);
      break;
    case "PATCH":
      todos.splice(0, todos.length);
      todos.push(...body);
      break;
    case "PUT":
      // res.status(200).json({ message: "PUT" });
      break;
    case "DELETE":
      // res.status(200).json({ message: "DELETE" });
      break;
    default:
    // res.status(404).json({ message: "Not found" });
  }
}


