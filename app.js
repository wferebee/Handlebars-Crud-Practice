
const express = require('express');
const path = require('path');



const indexRouter = require('./routes/index');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');




app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


const PORT = 3000;
app.listen(PORT, console.log(`Server up and running on ${PORT}`));

module.exports = app;
