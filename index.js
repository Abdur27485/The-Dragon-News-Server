const express = require('express');
const categories = require('./data/categories.json')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 27485;


app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon Is Running!')
})

app.get('/categories', (req, res) =>{
    res.send(categories)
})

app.listen( port, () =>{
    console.log(`Dragon API is running on port: ${port}`)
})