/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// io() viene de el script "public/socket.io/socket.io.js"
const socket = io()

// listeners
socket.on('connect', () => {
  console.log('Conectado')
})

socket.on('disconnect', () => {
  console.log('Desconectado')
})
