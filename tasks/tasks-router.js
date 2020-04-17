const express = require('express');

const Tasks = require('./tasks-model.js');

const router = express.Router();

// ----- BASE ENDPOINT: /api/tasks/ -----

router.get('/', (req, res) => {
    Tasks.getTasks()
        .then((tasks) => {
            res.status(200).json({ tasks })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Tasks could not be retrieved'
            })
        })
})

module.exports = router;