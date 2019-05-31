module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE
  })

  Meetup.associate = models => {
    Meetup.belongsTo(models.User, { foreignKey: 'user_id' })
  }

  return Meetup
}
