const db = require('../data/db-config.js')

module.exports = {
    getProjects,
    createProject,
}

function getProjects() {
    return db('projects');
}

function createProject(newProject) {
    return db('projects')
        .insert(newProject)
}
