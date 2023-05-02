const dotenv = require('dotenv');
const dbconnection = require('./config/db.confi');
const { app } = require('./app');
dotenv.config()
dbconnection();

const port = process.env.PORT;

process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    process.exit(1);
  });
  
  const server = app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
  
  process.on('unhandledRejection', (err) => {
    console.log('UNHANDLED REJECTION! 💥 Shutting down...');
    console.log(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
  