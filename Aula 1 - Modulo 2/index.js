const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/', (req, res) => {
    res.send('Hello World! via POST')
})

app.put('/put', (req, res) => {
    res.send('Hello World! via PUT')
})

app.delete('/', (req, res) => {
    res.send('Hello World! via DELETE')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
