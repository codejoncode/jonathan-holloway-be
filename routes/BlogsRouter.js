require("dotenv").config();
const express = require("express");
const blogsDB = require("../db/models/blogsDB.js");
const router = express.Router();

const {
  validateToken, 
} = require("../config/middleware/authenticate.js");

//may want to bring in a helper to authenticate for posts only done by one user edit only by one user  everyone else can view

router.get("/", (req, res) => {
  return blogsDB
    .getBlogPosts()
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).jsoon({ error: `Failed to get blog posts ${err}` })
    );
});

router.post("/", validateToken, (req, res) => {
  return blogsDB
    .addBlogPost(req.body)
    .then(results => res.status(200).json(results))
    .catch(err => res.status(500).json({ error: `Failed to add post ${err}` }));
});

router.put("/:id", validateToken, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  return blogsDB
    .editBlogPost(changes, id)
    .then(results => res.status(200).json(results))
    .catch(err =>
      res.status(500).json({ error: `Failed to edit post ${err}` })
    );
});

router.delete("/:id",validateToken, (req, res) => {
  const { id } = req.params;
  return blogsDB
    .deleteBlogPost(id)
    .then(count => {
      if (count) {
        res.status(200).json(count);
      } else {
        res.status(404).json({ error: "Not found nothing deleted" });
      }
    })
    .catch(err =>
      res.status(500).json({ error: `Failed to delete post ${err}` })
    );
});

module.exports = router;
