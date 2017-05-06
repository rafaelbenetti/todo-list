(function () {
    'use strict';

    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    
    const publicFolder = '../../public';
    const publicFolderScripts = '../../../bower_components';
    const todoRoutes = require('../todo-list/todo-route');

    const mongoConnection = require('../infra/mongo/connection');
    mongoConnection.connect(); 

    let app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }); 

    app.use(express.static(path.join(__dirname, publicFolder)));
    app.use(express.static(path.join(__dirname, publicFolderScripts)));

    app.set('views', path.join(__dirname, '../../public'));
    app.engine('html', require('ejs').renderFile);

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(bodyParser.json());

    app.use('/todo', todoRoutes);

    module.exports = app;
})();