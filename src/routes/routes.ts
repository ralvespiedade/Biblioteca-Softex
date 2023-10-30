//Importing method Router from express
import { Router } from 'express'
import livrosController from '../controller/livrosController'

const router = Router()

router.get('/livros/:id?', livrosController.get)
router.post('/livros/', livrosController.post)

export default  router