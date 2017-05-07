(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');

    describe('Request the base of the application', function () {
        
        it('Returns 200 status code', function (done) {
            request(app)
                .get('/')
                .expect(200)
                .end(function (err) {
                    if (err) throw err;
                    done();
                });
        });

        it('Returns HTML format', function(done) {
            request(app)
                .get('/')
                .expect('Content-Type', /html/, done);
        }); 

        it("Returns applications' title", function(done) {
            request(app)
                .get('/')
                .expect(/Welcome/i, done);
        });
    });
})();