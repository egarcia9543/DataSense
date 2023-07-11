const logger = require('morgan');
const dotenv = require('dotenv');
const path = require('path');
const express = require('express');

dotenv.config();
const ruta = require('./routes/routes');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger('dev'));
app.use('/', ruta);

const PORT = process.env.PORT || 6666;

app.listen(PORT, () => {
    console.log(`Servidor en línea puerto ${PORT}`);
});
