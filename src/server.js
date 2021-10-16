//importar dependencias
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//iniciando o express
const server = express();

server
    //utilizando os arquivos estaticos
    .use(express.static('public'))

    //configurar template engine 
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    //rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)

 
//ligar server
server.listen(5500)