import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../db';

const SignUp = (req, res, next) => {
    const newUser = {
        EMail: req.body.EMail,
        Password: req.body.Password
    };
    User
        .findOne({ where: { EMail: newUser.EMail } })
        .then(existingUser => {
            if (existingUser) {
                const error = new Error('SignUp failed');
                error.status = 400;
                return next(error);
            }

            bcrypt.hash(newUser.Password, 10, (err, hash) => {
                if (err) {
                    const error = new Error('SignUp failed');
                    error.status = 400;
                    return next(error);
                }

                newUser.Password = hash;
                User
                    .create(newUser)
                    .then(user => {
                        return res.status(200).json(user);
                    })
                    .catch(err => {
                        const error = new Error('Communication with database failed');
                        error.status = 500;
                        return next(error);
                    });
            });
        })
        .catch(err => {
            const error = new Error('Communication with database failed');
            error.status = 500;
            return next(error);
        });
};

const Login = (req, res, next) => {
    const login = {
        EMail: req.body.EMail,
        Password: req.body.Password
    };

    User
        .findOne({ where: { EMail: login.EMail } })
        .then(user => {
            if (user === null) {
                const error = new Error('Login failed');
                error.status = 401;
                return next(error);
            }

            bcrypt.compare(login.Password, user.Password, (err, result) => {
                if (err) {
                    const error = new Error('Login failed');
                    error.status = 401;
                    return next(error);
                }

                if (result) {
                    const token = jwt.sign(
                        {
                            EMail: user.EMail,
                            Id: user.Id
                        },
                        '',
                        {
                            expiresIn: '1h'
                        }
                    );

                    return res.status(200).json(token);
                }

                const error = new Error('Login failed');
                error.status = 401;
                return next(error);
            });
        })
        .catch(err => {
            const error = new Error('Communication with database failed');
            error.status = 500;
            return next(error);
        });
};

export { SignUp, Login };
