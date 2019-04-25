import express from 'express';

const app = express();

app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res
        .status(status)
        .json({
            status,
            message: err.message
        });
});

export default app;
