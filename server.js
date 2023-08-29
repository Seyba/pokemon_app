const express = require('express')
const jsxEngine = require('jsx-view-engine')
const pokemon = require('./models/pokemon')

const app = express()
const port = 3000;

app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pokemon
    })
})
app.get('/pokemon/:id', (req, res) => {
    const {id} = req.params
    res.send(id)
})
app.listen(port, () => {
    console.log(`App is running on port ${port}`)
})