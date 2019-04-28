import sequelize from 'sequelize';
import config from './config';
import UserModel from './models/User';
import TaskModel from './models/Task';

const Sequelize = new sequelize(
    config.sequelize.database,
    config.sequelize.username,
    config.sequelize.password,
    config.sequelize.config
);

const User = UserModel(Sequelize, sequelize);
const Task = TaskModel(Sequelize, sequelize);

export { User, Task };
