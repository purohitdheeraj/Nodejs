import express from 'express'

const PORT = 8080

const app = express()

app.get('/', (req, res)=>{
  res.send('This is home Page')
})

app.get('/products', (req, res)=>{
  res.json({message: 'Hare Krishna', status: 200})
})

app.get('/services', (req, res)=>{
  res.send('Service Running Successfully')
})

app.listen(PORT, ()=>{
  console.log(`app is listening to port ${PORT}`)
})