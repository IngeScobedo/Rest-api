require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 8080

// ROUTES
app.get('/', (req, res) => {
    res.send('Hola express')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})


