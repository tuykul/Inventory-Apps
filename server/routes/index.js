const route = require('express').Router()

const itemRoutes = require('./items')
route.use('/items', itemRoutes)

module.exports = route