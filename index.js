import express from 'express'

const PORT = 8080

const app = express()

app.get('/', (req, res)=>{
  res.send('This is home Page')
})

app.listen(PORT, ()=>{
  console.log(`app is listening to port ${PORT}`)
})