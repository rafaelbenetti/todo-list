(function () {
    'use strict';

    const express = require('express');
    const passport = require('passport');
    const todoController = require('./todo-controller');

    let router = express.Router();

    router.route('/')
        .get((req, res) => {
            todoController
                .find()
                .then((todos) => res.json(todos));
        })
        .post((req, res) => {
            todoController
                .create(req.body)
                .then((todo) => res.status(201).json(todo),
                    (error) => res.status(400).json(error));
        })
        .put((req, res) => {
            todoController
                .update(req.body)
                .then((todo) => res.status(200).json(todo),
                    (error) => res.status(400).json(error));
        });

    router.route('/:id')
         .delete((req, res) => {
             todoController
                 .delete(req.params.id)
                 .then(() => res.sendStatus(204));
         });  

    module.exports = router;
})();