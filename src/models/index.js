const sequelize = require('../config/database');
const User = require('./user');

sequelize.sync();
s
module.exports =  {
    sequelize,
    User
}