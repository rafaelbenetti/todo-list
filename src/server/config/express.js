(function () {
    'use strict';

    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');
    
    const publicFolder = '../../public';

    let app = express();

    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(express.static(path.join(__dirname, publicFolder)));

    app.set('views', path.join(__dirname, '../../public'));
    app.engine('html', require('ejs').renderFile);

    app.use(bodyParser.urlencoded({
        extended: false
    }));

    app.use(bodyParser.json());

    // change for routes.
    app.get('/', function (req, res) {
        res.send('Hello World!')
    });

    module.exports = app;
})();