const express = require('express');

const mentorRouter = express.Router();

mentorRouter.post('/', async (req, res) => {
  res.json({
    message: 'Post exitoso',
  })
})