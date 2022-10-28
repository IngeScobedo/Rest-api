const TicketControl = require('../models/ticket-control')

const ticketControl = new TicketControl()

const socketController = (socket) => {
  socket.emit('last-ticket', ticketControl.lastTicket)
  socket.emit('current-state', ticketControl.lastTickets)
  socket.emit('pending-tickets', ticketControl.tickets.length)

  socket.on('next-ticket', (payload, callback) => {
    const nextTicket = ticketControl.next()
    callback(nextTicket)

    socket.broadcast.emit('pending-tickets', ticketControl.tickets.length)
  })

  socket.on('attend-ticket', ({ desktop }, callback) => {
    if (!desktop) {
      const errorMessage = {
        ok: false,
        message: 'Desktop is required'
      }
      return callback(errorMessage)
    }

    const ticket = ticketControl.attend(desktop)
    socket.emit('pending-tickets', ticketControl.tickets.length)
    console.log('🚀 ~ file: socket.controller.js ~ line 28 ~ socket.on ~ length', ticketControl.tickets.length)

    socket.broadcast.emit('current-state', ticketControl.lastTickets)
    if (!ticket) {
      const errorMessage = {
        ok: false,
        message: 'No customers to serve'
      }
      callback(errorMessage)
    } else {
      const successMessage = {
        ok: true,
        ticket
      }
      callback(successMessage)
    }
  })

  socket.on('disconnect', () => {
    console.log('Client Disconnected')
  })
}

module.exports = { socketController }
