const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const AuthController = require('./app/controllers/AuthController')

// Auth
routes.post('/signup', AuthController.signup)
routes.post('/', AuthController.login)

// Auth routes
routes.use(authMiddleware)

routes.get('/meetups', (req, res) => {
  console.log(req.userId)

  res.send('OK')
})

module.exports = routes
