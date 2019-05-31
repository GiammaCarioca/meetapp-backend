const { User } = require('../models')
const { Preferences } = require('../models')

class PreferencesController {
  async show (req, res) {
    // pegar o token do local storage e colocar no req.headers.authorization????

    req.headers.authorization =
			'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTU1OTI0MDQ2MiwiZXhwIjoxNTU5MzI2ODYyfQ.FYWJYGjzUtSnhh9jiKjLQUorg2mj8VozkzxIvDrSmD0'

    const loggedUser = req.userId

    const user = await User.findOne({ where: { id: loggedUser } })

    const userName = user.name

    return res.json({ userName })
  }

  async create (req, res) {
    console.log(req.userId)
    const loggedUser = req.userId

    const user = await User.findOne({ where: { id: loggedUser } })

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const preferences = await Preferences.create(req.body)

    return res.json(preferences)
  }
}

module.exports = new PreferencesController()
