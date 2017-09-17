const mongoose = require('mongoose');

const dbInit = () => {
  const dbURL = process.env.DB_URL;
  console.log(`Trying to connect ${dbURL}`);

  mongoose.connect(dbURL);

  mongoose.connection.once('open', () => {
    console.log(`Connected to ${dbURL}`);
  });

  mongoose.connection.on('error', (error) => {
    console.log(error);
  });
};

module.exports = dbInit;
