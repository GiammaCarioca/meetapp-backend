module.exports = (sequelize, DataTypes) => {
  const Meetup = sequelize.define('Meetup', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    imageUrl: DataTypes.STRING,
    members: DataTypes.INTEGER,
    location: DataTypes.STRING,
    date: DataTypes.DATE
  })

  // Meetup.associate = models => {
  //   Meetup.hasMany(models.User, { as: 'Subscribers', through: 'MeetupUser', foreignKey: 'user_id' })
  // }

  Meetup.associate = models => {
    Meetup.belongsToMany(models.User, { through: 'MeetupUser' })
  }

  return Meetup
}
