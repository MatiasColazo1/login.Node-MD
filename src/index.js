const express = require('express');
const morgan = require('morgan');

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));

// Rutas
app.use('/', require('./routes/index'));

// starting the server
app.listen(app.get('port'),() => {
    console.log('Servidor corriendo en: ', app.get('port'));
});