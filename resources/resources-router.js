const express = require('express');

const Resources = require('./resources-model.js');

const router = express.Router();

// ----- BASE ENDPOINT: /api/resources/ -----

router.get('/', (req, res) => {
    Resources.getResources()
        .then((resources) => {
            res.status(200).json({ resources })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Resources could not be retrieved'
            })
        })
})

router.post('/', (req, res) => {
    Resources.createResource(req.body) 
        .then((ids) => {
            res.status(201).json({ id: ids[0] })
        })
        .catch((error) => {
            console.error(error.message);
            res.status(500).json({
                message: 'Resource could not be created'
            })
        })
})


module.exports = router;