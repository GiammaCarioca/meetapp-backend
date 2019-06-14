const { User } = require('../models')
const { Preferences } = require('../models')

class PreferencesController {
  async show (req, res) {
    const loggedUser = req.userId

    const user = await User.findOne({ where: { id: loggedUser } })

    const userName = user.name

    return res.json({ userName })
  }

  async create (req, res) {
    const loggedUser = req.userId

    const user = await User.findOne({ where: { id: loggedUser } })

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    const preferences = await Preferences.create(req.body)

    return res.json({ preferences })
  }
}

module.exports = new PreferencesController()
