//Importeing the Model

import Model from '../model/livro'
import { Request, Response } from 'express';

//Creating a method for the GET verb.
async function get(req: Request, res: Response) {
  const { id } = req.params

  //Talvez isso falhe, preciso testar
  const filter = id ? { _id: id } : {};

  const livros = await Model.find(filter)

  const message: string = livros ? 'success' : 'error'
  
  res.json({
    message,
    livros
  })

}

async function post(req: Request, res: Response) {
  const {
    titulo,
    autor ,
    outrosAutores,
    edicao,
    publicacao,
    paginas,
    isbn,
    assuntos
  } = req.body

  const livro = new Model({
    titulo,
    autor,
    outrosAutores,
    edicao,
    publicacao,
    paginas,
    isbn,
    assuntos
  })
    
  livro.save()

  res.send({
    livro
  }) 
}

export default {
  get,
  post
}