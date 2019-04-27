import sequelize from 'sequelize';
import UserModel from './models/User';
import TaskModel from './models/Task';

const Sequelize = new sequelize('', '', '', {
    host: 'localhost',
    dialect: 'mssql',
    dialectOptions: {
        options: {
            appName: 'Task Dashboard'
        }
    },
    define: {
        timestamps: false
    },
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

const User = UserModel(Sequelize, sequelize);
const Task = TaskModel(Sequelize, sequelize);

export { User, Task };
