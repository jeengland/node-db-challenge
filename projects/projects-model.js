const db = require('../data/db-config.js')

module.exports = {
    getProjects,
    getProjectById,
    createProject,
    addTaskToProject
}

function getProjects() {
    return db('projects');
}

function getProjectById(id) {
    return db('projects')
        .where({ id });
}

function createProject(newProject) {
    return db('projects')
        .insert(newProject)
}

function addTaskToProject(newTask) {
    return db('tasks')
        .insert(newTask)
}
