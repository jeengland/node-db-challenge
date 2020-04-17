const db = require('../data/db-config.js');

module.exports = {
    getTasks
}

function getTasks() {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name', 'p.description as project_description')
}