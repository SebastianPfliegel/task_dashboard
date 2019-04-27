import { Task } from '../db';

const GetAllUserTasks = (req, res, next) => {
    const user = req.userData.Id;

    Task
        .findAll({ where: { User: user } })
        .then(x => {
            return res.status(200).json(x);
        })
        .catch(err => {
            err.status = 500;
            return next(err);
        });
};

const GetUserTask = (req, res, next) => {
    const user = req.userData.Id;
    const task = req.params.taskId;

    Task
        .findOne({ where: { Id: task } })
        .then(x => {
            if (x === null) {
                const err = new Error('not existing');
                err.status = 400;
                return next(err);
            }

            if (x.User != user) {
                const err = new Error('auth');
                err.status = 401;
                return next(err);
            }

            return res.status(200).json(x);
        })
        .catch(err => {
            err.status = 500;
            return next(err);
        });
};

const CreateTask = (req, res, next) => {
    const newTask = {
        User: req.userData.Id,
        Description: req.body.Task
    };

    Task
        .create(newTask)
        .then(x => {
            return res.status(200).json(x);
        })
        .catch(err => {
            err.status = 500;
            return next(err);
        });
};

export { GetAllUserTasks, GetUserTask, CreateTask };
