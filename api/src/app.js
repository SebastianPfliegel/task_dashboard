import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import userRoutes from './routes/user';
import taskRoutes from './routes/task';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/tasks', taskRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    const status = err.status || 500;
    res
        .status(status)
        .json({
            error: {
                status: status,
                message: err.message
            }
        });
});

export default app;
