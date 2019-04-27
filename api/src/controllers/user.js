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
                const err = new Error('xxx');
                err.status = 400;
                return next(err);
            }

            bcrypt.hash(newUser.Password, 10, (err, hash) => {
                if (err) {
                    err.status = 500;
                    return next(err);
                }

                newUser.Password = hash;
                User
                    .create(newUser)
                    .then(x => {
                        return res.status(200).json(x);
                    })
                    .catch(err => {
                        err.status = 500;
                        return next(err);
                    });
            });
        })
        .catch(err => {
            err.status = 500;
            return next(err);
        });
};

const Login = (req, res, next) => {
    const login = {
        EMail: req.body.EMail,
        Password: req.body.Password
    };

    User
        .findOne({ where: { EMail: login.EMail } })
        .then(x => {
            if (x === null) {
                const err = new Error('x');
                err.status = 500;
                return next(err);
            }

            bcrypt.compare(login.Password, x.Password, (err, result) => {
                if (err) {
                    err.status = 500;
                    return next(err);
                }

                if (result) {
                    const token = jwt.sign(
                        {
                            EMail: x.EMail,
                            Id: x.Id
                        },
                        '',
                        {
                            expiresIn: '1h'
                        }
                    );

                    return res.status(200).json(token);
                }

                const error = new Error('xx');
                error.status = 500;
                return next(error);
            });
        })
        .catch(err => {
            err.status = 500;
            return next(err);
        });
};

export { SignUp, Login };
