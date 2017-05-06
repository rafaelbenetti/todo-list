(function () {
    'use strict';

    const mongo = require('mongodb');
    const mongoClient = mongo.MongoClient;
    const mongoConfig = require('../../config/mongo-config');
    const url = `${mongoConfig.address}:${mongoConfig.port}/${mongoConfig.database}`;

    let mongodb = function () {
        if (mongo.DB)
            return mongo.DB;

        mongoClient.connect(url, function (err, db) {
            if (err) {
                console.log(err);
            } else {
                console.log(`Connected on database with success at ${url}`);
                mongo.DB = db;
            }
        });
    };

    module.exports.connect = mongodb;
})();