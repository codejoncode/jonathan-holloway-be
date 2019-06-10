require("dotenv").config();
const express = require("express");
const lecturesDB = require("../db/models/lecturesDB.js");
const router = express.Router();

const { validateToken } = require("../config/middleware/authenticate.js");

router.get("/", (req, res) => {
  return lecturesDB
    .getLectures()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get lectress ${err}` })
    );
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  return lecturesDB
    .getLectureById(id)
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to get lecture by id ${err}` })
    );
});

router.post("/", validateToken, (req, res) => {
  return lecturesDB
    .addLecture(req.body)
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to add lecture ${err}` })
    );
});

router.put("/:id", validateToken, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  return lecturesDB
    .editLecture(changes, id)
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to edit project ${err}` })
    );
});

router.delete("/:id", validateToken, (req, res) => {
  const { id } = req.params;
  return lecturesDB
    .deleteLecture(id)
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
