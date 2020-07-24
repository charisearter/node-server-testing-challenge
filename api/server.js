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

server.post('/projects', (req, res) => {
  Projects.insert(req.body)
  .then(projects => {
    res.status(201).json(projects);
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

//put would look the same but needs a req.body
server.delete('/projects/:id', (req, res) => {
  const { id } = req.params
  Projects.del(id)
  .then(projects => {
    res.status(204).json(projects);
  })
  .catch(error => {
    res.status(500).json(error)
  })
})

module.exports = server;
