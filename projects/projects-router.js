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

router.get('/:id', (req, res) => {
    Projects.getProjectById(req.params.id)
        .then((project) => {
            if (project.length) {
                res.status(200).json({ project })
            } else {
                res.status(404).json({
                    error: 'No project by that ID exists'
                })
            }
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Could not retrieve project'
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

router.post('/:id/tasks', (req, res) => {
    const newTask = req.body;
    newTask.project_id = req.params.id;
    Projects.getProjectById(req.params.id) 
        .then((project) => {
            if (project.length) {
                Projects.addTaskToProject(newTask)
                    .then((ids) => {
                        res.status(201).json({ id: ids[0] })
                    })
                    .catch((error) => {
                        console.error(error.message);
                        res.status(500).json({
                            message: 'Task could not be added to project'
                        })
                    })
            } else {
                res.status(404).json({
                    error: 'No project by that ID exists'
                })
            }
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Project ID could not be validated'
            })
        })
})

module.exports = router;