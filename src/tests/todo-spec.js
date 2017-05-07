(function () {
    'use strict';

    const request = require('supertest');
    const app = require('../server/config/express');
    const mongo = require('mongodb');
    const todos = require('./data/todos.js');
    const COLLECTION = '/todo';

    describe('Creating new TODO', function () {

        it('Returns 201 status', function (done) {
            request(app)
                .post(COLLECTION)
                .send('description=CreatedByTests&completed=false&order=17')
                .expect(201, done);
        });

        it('Returns complete todo', function (done) {
            let todo = todos[0];
            var regex = new RegExp(`"description":"${todo.description}"`);
            request(app)
                .post(COLLECTION)
                .send(`description=${todo.description}&completed=${todo.completed}&order=${todo.order}`)
                .expect(regex, done);
        });
    });

    describe('Update TODO', function () {

        it('Mark as completed', function (done) {

            findOne().then((todo) => {
                todo.completed = !todo.completed;
                request(app)
                    .put(COLLECTION)
                    .send(todo)
                    .expect(/{"n":1,"nModified":1,"ok":1}/, done);
            });
        });

        it('Change description', function (done) {

            findOne().then((todo) => {
                todo.description = `${todo.description} UPDATED`;
                request(app)
                    .put(COLLECTION)
                    .send(todo)
                    .expect(/{"n":1,"nModified":1,"ok":1}/, done);
            });
        });
    });

    describe('Delete TODO', function () {

        it('Deleting by ID', function (done) {

            findOne().then((todo) => {
                request(app)
                    .delete(`${COLLECTION}/${todo._id}`)
                    .expect(204, done);
            });
        });
    });

    describe('Find TODOs', function () {

        it('Expect status 200', function (done) {
            
            request(app)
                .get(COLLECTION)
                .expect(200, done);
        });
    });

    let findOne = function () {
        return request(app)
            .get(COLLECTION)
            .send(`search=Mussum Ipsum`)
            .then((result) => {
                return Array.from(result.body)[0];
            });
    };
})();