const express = require('express');
const bodyParser = require('body-parser');
const dbInit = require('./dbInit');

const app = express();
const PORT = process.env.PORT || 9876;
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  app.use(require('morgan')('dev'));
}

// middlewares
app.use(bodyParser.json());
// custom routes
app.use('/api/stickers/', require('./routes/stickers'));

app.get('/', (req, res) => {
  res.send('connected to test app\n');
});

app.listen(PORT, () => {
  console.log(`${new Date().toUTCString()}: Started application on ${PORT}`);
});

dbInit();
