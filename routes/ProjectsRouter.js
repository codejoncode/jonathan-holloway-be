require("dotenv").config();
const express = require("express");
const projectsDB = require("../db/models/projectsDB.js");
const router = express.Router();

const { validateToken } = require("../config/middleware/authenticate.js");

router.get("/", (req, res) => {
  return projectsDB
    .getProjects()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get projects ${err}` })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return projectsDB
    .getProjectById(id)
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get project by id ${err}` })
    );
});

router.post("/", validateToken, (req, res) => {
  return projectsDB
    .addProject(req.body)
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to add project ${err}` })
    );
});

router.put("/:id", validateToken, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  return projectsDB
    .editProject(changes, id)
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to edit project ${err}` })
    );
});

router.delete("/:id", validateToken, (req, res) => {
  const { id } = req.params;
  return projectsDB
    .deleteProject(id)
    .then(count => {
      if (count) {
        res.status(200).json(count);
      }
    })
    .catch(err =>
      res.status(500).json({ erro: `Failed to delete project ${err}` })
    );
});

module.exports = router;
