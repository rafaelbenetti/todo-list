(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    const mongo = require('mongodb');
    const todos = require('./data/todos.js');

    describe('Creating new TODO', function () {

        it('Returns 201 status', function (done) {
            request(app)
                .post('/todo')
                .send('description=CreatedByTests&completed=false&order=17')
                .expect(201, done);
        });

        it('Returns complete todo', function (done) {
            let todo = todos[0];
            var regex = new RegExp(`"description":"${todo.description}"`);
            request(app)
                .post('/todo')
                .send(`description=${todo.description}&completed=${todo.completed}&order=${todo.order}`)
                .expect(regex, done);
        });
    });
})();