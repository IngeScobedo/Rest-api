/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// DOM References
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

// io() viene de el script "public/socket.io/socket.io.js"
const socket = io()

// listeners
socket.on('connect', () => {
  console.log('conectado')
  lblOffline.classList.toggle('hidden')
  lblOnline.classList.toggle('hidden')
})

socket.on('disconnect', () => {
  lblOffline.classList.toggle('hidden')
  lblOnline.classList.toggle('hidden')
})
