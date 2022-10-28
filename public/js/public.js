/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// DOM References
const $ = (selector) => document.querySelector(selector)

const lblTicket1 = $('#lblTicket1')
const lblEscritorio1 = $('#lblEscritorio1')
const lblTicket2 = $('#lblTicket2')
const lblEscritorio2 = $('#lblEscritorio2')
const lblTicket3 = $('#lblTicket3')
const lblEscritorio3 = $('#lblEscritorio3')
const lblTicket4 = $('#lblTicket4')
const lblEscritorio4 = $('#lblEscritorio4')

// io() viene de el script "public/socket.io/socket.io.js"
// Socket.io instance
const socket = io()

// Socket Listeners
socket.on('current-state', payload => {
  const audio = new Audio('./audio/new-ticket.mp3')
  audio.play()
  const [ticket1, ticket2, ticket3, ticket4] = payload

  if (ticket1) {
    lblTicket1.innerText = `Ticket ${ticket1.ticketId}`
    lblEscritorio1.innerText = `Escritorio ${ticket1.desktop}`
  }

  if (ticket2) {
    lblTicket2.innerText = `Ticket ${ticket2.ticketId}`
    lblEscritorio2.innerText = `Escritorio ${ticket2.desktop}`
  }

  if (ticket3) {
    lblTicket3.innerText = `Ticket ${ticket3.ticketId}`
    lblEscritorio3.innerText = `Escritorio ${ticket3.desktop}`
  }

  if (ticket4) {
    lblTicket4.innerText = `Ticket ${ticket4.ticketId}`
    lblEscritorio4.innerText = `Escritorio ${ticket4.desktop}`
  }
})
