const express = require('express')

class Server {
  constructor () {
    this.app = express()
    this.PORT = process.env.PORT || 8080

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()
  }

  middlewares () {
    // Public directory
    this.app.use(express.static('public'))
  }

  routes () {
    this.app.get('/api', (req, res) => {
      res.send('Hola express')
    })
  }

  start () {
    this.app.listen(this.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${this.PORT}`)
    })
  }
}

module.exports = Server
