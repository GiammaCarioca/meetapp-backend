const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.password) {
            user.password_hash = await bcrypt.hash(user.password, 8)
          }
        }
      }
    }
  )

  User.associate = models => {
    User.hasMany(models.Meetup, { as: 'Subscriptions', through: 'MeetupUser', foreignKey: 'meetup_id' })
  }

  User.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash)
  }

  User.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, authConfig.secret, {
      expiresIn: 86400
    })
  }

  return User
}
