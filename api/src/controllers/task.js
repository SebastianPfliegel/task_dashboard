import { Task } from '../db';

const GetAllUserTasks = (req, res, next) => {
    const user = req.userData.Id;

    Task
        .findAll({ where: { User: user } })
        .then(allTasks => {
            return res.status(200).json(allTasks);
        })
        .catch(err => {
            const error = new Error('Communication with database failed');
            error.status = 500;
            return next(error);
        });
};

const GetUserTask = (req, res, next) => {
    const userId = req.userData.Id;
    const taskId = req.params.taskId;

    Task
        .findOne({ where: { Id: taskId } })
        .then(task => {
            if (task === null) {
                const error = new Error('Task does not exist');
                error.status = 404;
                return next(error);
            }

            if (task.User != userId) {
                const error = new Error('Permission denied for this task');
                error.status = 403;
                return next(error);
            }

            return res.status(200).json(task);
        })
        .catch(err => {
            const error = new Error('Communication with database failed');
            error.status = 500;
            return next(error);
        });
};

const CreateTask = (req, res, next) => {
    const newTask = {
        User: req.userData.Id,
        Description: req.body.Task
    };

    Task
        .create(newTask)
        .then(task => {
            return res.status(200).json(task);
        })
        .catch(err => {
            const error = new Error('Communication with database failed');
            error.status = 500;
            return next(error);
        });
};

const DeleteTask = (req, res, next) => {
    const userId = req.userData.Id;
    const taskId = req.params.taskId;

    Task
        .findOne({ where: { Id: taskId }})
        .then(task => {
            if (task === null) {
                const error = new Error('Task does not exist');
                error.status = 404;
                return next(error);
            }

            if (task.User != userId) {
                const error = new Error('Permission denied for this task');
                error.status = 403;
                return next(error);
            }

            Task
                .destroy({ where: { Id: taskId }})
                .then(() => {
                    return res.status(200).json(task);
                })
                .catch(err => {
                    const error = new Error('Communication with database failed');
                    error.status = 500;
                    return next(error);
                });

        })
        .catch(err => {
            const error = new Error('Communication with database failed');
            error.status = 500;
            return next(error);
        });
};

export { GetAllUserTasks, GetUserTask, CreateTask, DeleteTask };
