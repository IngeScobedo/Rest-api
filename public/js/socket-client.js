/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// DOM References
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')

// io() viene de el script "public/socket.io/socket.io.js"
// Socket.io instance
const socket = io()

// Socket Listeners
socket.on('connect', () => {
  lblOffline.classList.toggle('hidden')
  lblOnline.classList.toggle('hidden')
})

socket.on('disconnect', () => {
  lblOffline.classList.toggle('hidden')
  lblOnline.classList.toggle('hidden')
})
