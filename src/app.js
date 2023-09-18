const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const errorHandler = require('./utils/errorHandler');
require('dotenv').config();
const router = require('./routes');

const app = express();

//! MIDDLEWARES //
app.use(express.json());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));
app.use(cors());

app.use(router);
app.get('/', (req, res) => {
    return res.send(
        "Welcome to express!",
    );
})

app.use('/api/v1', router);

app.use(errorHandler);

module.exports = app;