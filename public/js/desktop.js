/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// DOM References
const $ = (selector) => document.querySelector(selector)

const lblInfo = $('#info')
const lblDesktopId = $('#desktop-id-label')
const lblTicketId = $('#ticket-id-label')
const lblPendingTickets = $('#pending-tickets')
const btnAttendNextTicket = $('#handler-generate-btn')

// Url Params
const searchParams = new URLSearchParams(window.location.search)
const desktop = searchParams.get('desktop')
if (!desktop) {
  window.location = 'index.html'
  throw new Error('Desktop is required')
}
lblDesktopId.innerText = desktop
lblInfo.classList.add('hidden')

// io() viene de el script "public/socket.io/socket.io.js"
// Socket.io instance
const socket = io()

// Socket Listeners
socket.on('pending-tickets', tickets => {
  console.log('🚀 ~ file: desktop.js ~ line 29 ~ tickets', tickets)
  lblPendingTickets.innerText = tickets
})

socket.on('send-message', data => {
  console.log('Nuevo mensaje', data)
})

socket.on('disconnect', () => {
  btnAttendNextTicket.disabled = true
})

// Event Listeners
btnAttendNextTicket.addEventListener('click', () => {
  socket.emit('attend-ticket', { desktop }, ({ ok, ticket, message }) => {
    if (!ok) {
      lblInfo.classList.remove('hidden')
      lblInfo.innerText = message
      lblTicketId.innerText = 'nobody'
      return
    }
    lblInfo.classList.add('hidden')
    const { ticketId } = ticket
    lblTicketId.innerText = ticketId
  })
})
