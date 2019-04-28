import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import userRoutes from './routes/user';
import taskRoutes from './routes/task';

const app = express();

// Use morgan to log to console
app.use(morgan('dev'));

// Parse json content from body
app.use(bodyParser.json());

// Allow Cross-Origin Resource Sharing
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE');
        return res.status(200).json({});
    }
    next();
});

// Routes
app.use('/user', userRoutes);
app.use('/tasks', taskRoutes);

// Handling not defined routes
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

// Error handling
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
