const whitelist = ['192.168.100.125']
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('ACCESS DENIED'))
    }
  }
}

module.exports = corsOptions
