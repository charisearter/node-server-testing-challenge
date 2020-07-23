const express = require("express");

const Projects = require("../projects/projectsModel.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
});

server.get("/projects", (req, res) => {
    Projects.getAll()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

// server.post('/projects', (req, res) => {
//   //
// })

// server.delete('/projects', (req, res) => {
//   //
// })

module.exports = server;
