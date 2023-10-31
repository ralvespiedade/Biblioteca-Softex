//Importing express 
import express from 'express'
//Importion middleweres to treat data from forms
import { json } from 'body-parser';

import router  from './src/routes/routes'
import connect from './src/database/db'

const app = express()

//Coonnecting to database
connect()

//Allowing json data analysis form the requests body
app.use(json())

//Routes
app.use('/api-biblioteca', router)

//Conection with server
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})


