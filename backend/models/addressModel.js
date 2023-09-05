module.exports = (sequelize, DataTypes) => {
    return sequelize.define('address', {
        street: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        pin: {
            type: DataTypes.INTEGER,
        }
    });
} 