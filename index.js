(function () {
    'use strict';

    var http = require('http');
    var host = require('./src/server/config/host-config');
    var app = require('./src/server/config/express');

    http.createServer(app)
        .listen(host.port, () => {
            console.log(`Node server on port: ${host.port}`);
        });
})();  