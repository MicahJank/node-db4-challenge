const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const recipeRouter = require('./recipes/recipeRouter.js');


const server = express();

server.use(helmet());
server.use(express.json());

server.use(logger);
server.use(cors());
server.use('/api/recipes', recipeRouter);

server.get('/', (req, res) => {
    res.send(`<h2>Welcome to the Recipies API!! BOOOM!</h2>`)
});

function logger(req, res, next) {
    console.log({
        request_method: req.method,
        request_url: req.url,
        timestamp: Date().toString()
    });
    next();
};


module.exports = server;