const { request, response } = require('express')

const getUser = (req = request, res = response) => {
  const { q = '', order = 1, limit = 10, offset = 0 } = req.query
  res.status(200).json({
    message: 'API GET',
    query: q,
    order,
    limit,
    offset
  })
}

const saveUser = (req = request, res = response) => {
  const { name, lastName } = req.body
  res.status(200).json({
    message: 'API POST',
    name,
    lastName
  })
}

const updateUser = (req = request, res = response) => {
  const { id } = req.params
  res.status(200).json({
    message: 'API PUT',
    id
  })
}

module.exports = {
  getUser,
  saveUser,
  updateUser
}
