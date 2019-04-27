import express from 'express';
import auth from '../middleware/auth';
import * as Task from '../controllers/task';

const router = express.Router();

router.get('/', auth, Task.GetAllUserTasks);
router.get('/:taskId', auth, Task.GetUserTask);
router.post('/', auth, Task.CreateTask);

export default router;
