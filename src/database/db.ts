import mongoose from 'mongoose'



function connect() {
  mongoose.connect('mongodb://127.0.0.1:27017/api-biblioteca')

  const db = mongoose.connection

  //Once the connection is open
  db.once('open', () => {
    console.log('Connected to database!')
  })

  //On error...
  db.on('error', (error) => {
    console.error('Database connection error: ', error)
  })
  
}

export default connect

