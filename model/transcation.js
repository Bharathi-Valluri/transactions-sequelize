const Sequelize = require('sequelize')
const {sequelize} = require('../database')
const student = sequelize.define('Student',{
    id:{
        primaryKey :true,
        type :Sequelize.INTEGER,
        autoIncrement :true,
        allowNull :true
    },
    firstName:{
        type:Sequelize.STRING,
        allowNull:false
    },
    lastName :{
        type :Sequelize.STRING,
        allowNull:false
    },
    email:{
        type :Sequelize.STRING
    },
},{
    freezeTableName:true,
    timestamps:false
    
    
  })

module.exports =student