import mongoose from 'mongoose'

//Creating schema

const schema = new mongoose.Schema({
  titulo: String,
  autor : String,
  outrosAutores: String,
  edicao: String,
  publicacao: String,
  paginas: String,
  isbn: String,
  assuntos: String
})

//Difining model
const Model = mongoose.model('livros', schema)

export default Model
