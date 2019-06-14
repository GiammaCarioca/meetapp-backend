module.exports = (sequelize, DataTypes) => {
  const MeetupUser = sequelize.define('MeetupUser', {
    user_id: {
      type: DataTypes.INTEGER,
      references: { model: 'users', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false
    },
    meetup_id: {
      type: DataTypes.INTEGER,
      references: { model: 'meetups', key: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: false
    }
  })

  return MeetupUser
}
