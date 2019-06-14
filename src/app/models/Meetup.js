module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE
  })

  Meetup.associate = models => {
    Meetup.belongsToMany(models.User, { through: 'Subscribers', foreignKey: 'user_id' })
  }

  return Meetup
}
