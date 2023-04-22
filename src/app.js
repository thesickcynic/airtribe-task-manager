const express = require("express");
const bodyParser = require("body-parser");
const taskInfo = require('./routes/taskinfo')
const routes = require('express').Router();
const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(routes);

const PORT = 8080;

routes.use('/tasks', taskInfo);

server.listen(PORT, (error) =>  {
    console.log("Server running on port " + PORT);
});