const express = require('express')
const cors = require('cors')

// const corsOptions = require('../config/corsConfig')

class Server {
  constructor () {
    this.app = express()
    this.PORT = process.env.PORT || 8080
    this.paths = {
      users: '/api/users'
    }

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()
  }

  middlewares () {
    // Public directory
    this.app.use(express.static('public'))

    // CORS and config
    // this.app.use(cors(corsOptions))
    this.app.use(cors())

    // JSON Parser
    this.app.use(express.json())
  }

  routes () {
    this.app.use(this.paths.users, require('../routes/user.routes'))
  }

  start () {
    this.app.listen(this.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${this.PORT}`)
    })
  }
}

module.exports = Server
