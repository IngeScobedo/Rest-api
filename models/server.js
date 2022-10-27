const express = require('express')
const cors = require('cors')
const { socketController } = require('../sockets/socket.controller')

// const corsOptions = require('../config/corsConfig')

class Server {
  constructor () {
    this.app = express()
    this.server = require('http').createServer(this.app)
    this.io = require('socket.io')(this.server)

    this.PORT = process.env.PORT || 8080
    this.paths = {
      // users: '/api/users'
    }

    // Middlewares
    this.middlewares()

    // Routes
    this.routes()

    // Sockets
    this.sockets()
  }

  middlewares () {
    // CORS
    // this.app.use(cors(corsOptions))
    this.app.use(cors())

    // Public directory
    this.app.use(express.static('public'))
  }

  routes () {
    // this.app.use(this.paths.users, require('../routes/user.routes'))
  }

  sockets () {
    this.io.on('connection', socketController)
  }

  start () {
    this.server.listen(this.PORT, () => {
      console.log(`Servidor corriendo en el puerto ${this.PORT}`)
    })
  }
}

module.exports = Server
