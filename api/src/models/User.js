module.exports = function(sequelize, DataTypes) {
    return sequelize.define('User', {
        Id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        EMail: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'User'
    });
};
