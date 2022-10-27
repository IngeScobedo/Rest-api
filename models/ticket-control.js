const path = require('path')
const fs = require('fs')

class Ticket {
  constructor (ticketId, desktop) {
    this.ticketId = ticketId
    this.desktop = desktop
  }
}

class TicketControl {
  constructor () {
    this.today = new Date().getDate()
    this.tickets = []
    this.lastTicket = 0
    this.lastTickets = []

    this.init()
  }

  get toJson () {
    return {
      lastTicket: this.lastTicket,
      today: this.today,
      tickets: this.tickets,
      lastTickets: this.lastTickets
    }
  }

  init () {
    const { today, tickets, lastTicket, lastTickets } = require('../db/data.json')
    if (today === this.today) {
      this.tickets = tickets
      this.lastTicket = lastTicket
      this.lastTickets = lastTickets
    } else {
      this.saveDb()
    }
  }

  saveDb () {
    const dbPath = path.join(__dirname, '../db/data.json')
    fs.writeFileSync(dbPath, JSON.stringify(this.toJson))
  }

  next () {
    this.lastTicket += 1
    const ticket = new Ticket(this.lastTicket, null)
    this.tickets.push(ticket)

    this.saveDb()
    return `Ticket ${ticket.ticketId}`
  }

  attend (desktop) {
    if (!this.tickets.length) {
      return null
    }
    const ticket = this.tickets.shift()
    ticket.dektop = desktop

    this.lastTickets.unshift(ticket)

    if (this.lastTickets.length > 4) {
      this.lastTickets.splice(-1, 1)
    }
    this.saveDb()

    return ticket
  }
}

module.exports = TicketControl
