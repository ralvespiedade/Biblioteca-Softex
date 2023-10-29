//Importeing the Model

import Model from '../model/livro'
import { Request, Response } from 'express';

//Creating a method for the GET verb.
async function get(req: Request, res: Response) {
  const { id } = req.params

  //Talvez isso falhe, preciso testar
  const filter = id ? { _id: id } : {};

  const livros = await Model.find(filter)

  res.json(livros)
}

export default {
  get
}