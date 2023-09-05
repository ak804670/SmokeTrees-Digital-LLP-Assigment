const Sequelize = require('sequelize');
const UserModel = require('./userModel');
const AddressModel = require('./addressModel');


const sequelize = new Sequelize('somkeTrees', 'root','', {
    host: 'localhost',
    dialect: 'mysql',
   
});

const User = UserModel(sequelize, Sequelize);
const Address = AddressModel(sequelize, Sequelize);

// Associations
User.hasMany(Address, { as: 'Addresses', foreignKey: 'userId' });
Address.belongsTo(User);

module.exports = {
    User,
    Address,
    sequelize
};




