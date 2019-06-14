module.exports = (sequelize, DataTypes) => {
  const MeetupUser = sequelize.define('MeetupUser', {
    user_id: {
      type: DataTypes.INTEGER
    },
    meetup_id: {
      type: DataTypes.INTEGER
    }
  })

  return MeetupUser
}
