const socketController = (socket) => {
  socket.on('send-message', (payload, callback) => {
    const id = 123434
    callback(id)
    socket.broadcast.emit('send-message', payload)
  })

  socket.on('disconnect', () => {
    console.log('Client Disconnected')
  })
}

module.exports = { socketController }
