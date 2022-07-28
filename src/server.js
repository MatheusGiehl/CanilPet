const express = require('express');
const dotenv = require('dotenv');
const mustache = require('mustache-express');
const path = require('path');
const mainRoutes = require('./routes/index');

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req, res) => {
    res.render('pages/404');
})

server.listen(process.env.PORT);