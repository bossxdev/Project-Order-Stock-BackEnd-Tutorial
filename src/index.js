import express from 'express';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConfig from '../database/db.js';

// Express Route
import userRoute from '../routes/user.route.js';

// Connecting mongoDB Database
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
    useNewUrlParser: true,
}).then(() => {
    console.log('Database successfully connected')
},
    error => {
        console.log('Database could not connected: ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', userRoute);

// PORT
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// 404 Error
app.use((req, res, next) => {
  const error = new Error('Not found');
  res.status(404).json({
    message: error.message
  });
  next(createError(404));
});

// Error Handler
app.use((error, req, res, next) => {
    console.log(error.message);
    if (!error.statusCode) error.statusCode = 500;
    res.status(error.statusCode).send(error.message);
});
