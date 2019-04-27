module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Task', {
        Id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        User: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: 'User',
                key: 'Id'
            }
        },
        Description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        tableName: 'Task'
    });
};
