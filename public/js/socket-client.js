/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// DOM References
const lblOnline = document.querySelector('#lblOnline')
const lblOffline = document.querySelector('#lblOffline')
const messageInput = document.querySelector('#messageInput')
const submitBtn = document.querySelector('#sendBtn')

// io() viene de el script "public/socket.io/socket.io.js"
// Socket.io instance
const socket = io()

// Socket Listeners
socket.on('connect', () => {
  lblOffline.classList.toggle('hidden')
  lblOnline.classList.toggle('hidden')
})

socket.on('send-message', data => {
  console.log('Nuevo mensaje', data)
})

socket.on('disconnect', () => {
  lblOffline.classList.toggle('hidden')
  lblOnline.classList.toggle('hidden')
})

// Event Listeners
submitBtn.addEventListener('click', () => {
  const message = messageInput.value
  const payload = {
    message,
    userId: 123,
    date: new Date().getTime()
  }
  socket.emit('send-message', payload, (id) => {
    console.log('Mensaje enviado', id)
  })
  messageInput.value = ''
})
