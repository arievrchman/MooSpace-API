require('dotenv').config();
require('express-group-routes');
const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/uploads', express.static('uploads'));

const indexRotues = require('./routes/index');

app.group('/api/v2', routes => {
  routes.use('/', indexRotues);
});

app.listen(PORT, () => console.log('Server running on port:', PORT));
