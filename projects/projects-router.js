const express = require('express');

const Projects = require('./projects-model.js');

const router = express.Router();

// ----- BASE ENDPOINT: /api/projects/ -----

router.get('/', (req, res) => {
    Projects.getProjects()
        .then((projects) => {
            res.status(200).json({ projects })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Projects could not be retrieved'
            })
        })
})

router.post('/', (req, res) => {
    Projects.createProject(req.body)
        .then((ids) => {
            res.status(201).json({ id: ids[0] })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Project could not be created'
            })
        })
})

module.exports = router;