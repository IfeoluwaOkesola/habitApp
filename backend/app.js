const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const routeManager = require('./routes/route');

const app = express();
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

app.use('/', routeManager);
app.use(cookieParser())


app.use(express.urlencoded({ extended: false }));
// app.get('/health', (req, res) => {
//     res.status(200).json('Server up!');
//   });
  
//   app.get('*', (req, res) => {
//     res.status(404).json('PAGE NOT FOUND');
//   });

module.exports = { app };
