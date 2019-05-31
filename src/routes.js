const express = require('express')

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')

const AuthController = require('./app/controllers/AuthController')
const PreferencesController = require('./app/controllers/PreferencesController')

// Auth
routes.post('/signup', AuthController.signup)
routes.post('/', AuthController.login)

// Auth routes
routes.use(authMiddleware)

routes.get('/preferences', PreferencesController.show)
routes.post('/preferences', PreferencesController.create)

module.exports = routes
