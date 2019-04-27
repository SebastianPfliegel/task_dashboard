import express from 'express';
import * as User from '../controllers/user';

const router = express.Router();

router.post('/signup', User.SignUp);
router.post('/login', User.Login);

export default router;
