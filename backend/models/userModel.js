module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user', {
        username: {
            type: DataTypes.STRING,
        }
    });
}