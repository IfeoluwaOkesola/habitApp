const express = require('express');
const app = express();
const cors = require('cors');

app.use(
    cors({
      credentials: true,
      origin: function (origin, callback) {
        console.log(`Origin ${origin} is being granted CORS access`);
        callback(null, true);
      },
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  module.exports = {app};