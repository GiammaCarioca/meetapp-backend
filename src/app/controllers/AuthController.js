const { User } = require('../models')

class AuthController {
  async signup (req, res) {
    const { email } = req.body

    if (await User.findOne({ where: { email } })) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const user = await User.create(req.body)

    return res.json({ user, token: user.generateToken() })
  }

  async login (req, res) {
    const { email, password } = req.body

    const user = await User.findOne({ where: { email } })

    if (!user) {
      return res.status(400).json({ error: 'User not found' })
    }

    if (!await user.checkPassword(password)) {
      return res.status(400).json({ error: 'Invalid password' })
    }

    return res.json({ user, token: user.generateToken() })
  }
}

module.exports = new AuthController()
