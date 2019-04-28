import jwt from 'jsonwebtoken';
import config from '../config';

export default (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, config.api.secret);
        req.userData = decoded;
        next();
    } catch (err) {
        const error = new Error('Unauthorized');
        error.status = 401;
        return next(error);
    }
};
