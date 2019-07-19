const { PORT } = process.env
console.log(PORT)
const express = require('express')
const app = express()
// body-parser
// morgan

// app.listen(5000, () => console.log('You are doing a thing!'))

const listener = () => console.log('You are doing a thing!')
app.listen(PORT, listener)