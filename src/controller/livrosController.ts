//Importeing the Model

import Model from '../model/livro'
import { Request, Response } from 'express';

//Creating method for the GET verb.
async function get(req: Request, res: Response) {
  const { id } = req.params

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

const message: string = livro ? 'success' : 'error'

  res.send({
    livro,
    message
  }) 
}

async function put(req: Request, res: Response) {
  //vou pegar o id do req.param
  const { id } = req.params
 
  //fazer uma consulta pelo metodo Model.find(_id: id)
  const livro = await Model.findOneAndUpdate({ _id: id }, req.body, { new: true })
  
  const message: string = livro ? 'success' : 'error'

  res.send({
    message,
    livro
  })
    
}

async function del(req: Request, res: Response) {
  const { id } = req.params
  
  const livro = await Model.findOneAndDelete({_id: id})

  const message = livro ? "success" : "error"
  
  res.send({
    message,
    livro
  })
}
    

export default {
  get,
  post,
  put,
  del
}

