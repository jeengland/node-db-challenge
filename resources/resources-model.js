const db = require('../data/db-config.js')

module.exports = {
    getResources,
    createResource
}

function getResources() {
    return db('resources')
}

function createResource(newResources){
    return db('resources')
        .insert(newResources)
}