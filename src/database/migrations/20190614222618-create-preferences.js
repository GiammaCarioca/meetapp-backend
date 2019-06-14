'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('preferences', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      frontend: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      backend: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      mobile: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      devops: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      gestao: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      marketing: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('preferences')
  }
}
