const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/medical-bills',{logging:false})
const Op = Sequelize.Op


const Bill = db.define('bill', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  hospital: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true
    },
  },
  bill: {
    type: Sequelize.DECIMAL(20, 2),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

module.exports = {
    Bill,
    db
}