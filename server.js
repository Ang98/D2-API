const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const { config } = require('./config/index.js');
const mentorRouter = require('./routers/mentor.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(config.mongodb_uri, {
  
});

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected!!!!')
});

//Http request Logger
app.use(morgan('tiny'));

//Rutas
app.use('/api', mentorRouter);

app.get('/', (req, res) => {
  res.json('Server is ready');
  console.log(`${config.dev}`);
});

//Puerto
app.listen(config.port, () => {
  console.log(`http://localhost:${config.port}`);
});
