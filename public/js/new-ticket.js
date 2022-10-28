/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// DOM References
const handlerGenerateBtn = document.querySelector('#handler-generate-btn')
const ticketStatus = document.querySelector('#ticket-status')

// io() viene de el script "public/socket.io/socket.io.js"
// Socket.io instance
const socket = io()

// Socket Listeners
socket.on('connect', () => {
  handlerGenerateBtn.disabled = false
})

socket.on('last-ticket', ticket => {
  ticketStatus.innerText = `Ticket ${ticket}`
})

socket.on('disconnect', () => {
  handlerGenerateBtn.disabled = true
})

// Event Listeners
handlerGenerateBtn.addEventListener('click', () => {
  socket.emit('next-ticket', null, (ticket) => {
    ticketStatus.innerText = `Ticket ${ticket}`
  })
})
