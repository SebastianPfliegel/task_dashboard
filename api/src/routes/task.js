import express from 'express';
import * as Task from '../controllers/task';

const router = express.Router();

router.get('/', Task.GetAllUserTasks);
router.get('/:taskId', Task.GetUserTask);

export default router;
