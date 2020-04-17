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
    return db('projects as p')
        .join('tasks as t', 'p.id', 't.project_id')
        .join('project_resources as pr', 'p.id', 'pr.project_id')
        .join('resources as r', 'pr.resource_id', 'r.id')
        .select('p.id', 
                'p.name', 
                'p.description', 
                'p.completed', 
                't.id as task_id', 
                't.description as task_desc',
                't.notes as task_notes',
                't.completed as task_comp',
                'r.id as res_id',
                'r.name as res_name',
                'r.description as res_desc' 
                )
        .where('p.id', id)
        .then((data) => {
            let payload = {};
            payload.id = data[0].id;
            payload.description = data[0].description;
            if (data[0].completed) {
                payload.completed = true;
            }  else {
                payload.completed = false;
            }
            payload.tasks = [];
            payload.resources = [];
            data.forEach((instance) => {
                let task = {};
                task.id = instance.task_id;
                task.description = instance.task_desc;
                task.notes = instance.task_notes;
                if (instance.task_comp) {
                    task.completed = true;
                }  else {
                    task.completed = false;
                }
                let total = 0;
                payload.tasks.forEach((current) => {
                    if (current.id === task.id) {
                        total++
                    }
                })
                if (!total) {
                    payload.tasks.push(task)
                }
            })
            data.forEach((instance) => {
                let resource = {};
                resource.id = instance.res_id;
                resource.name = instance.res_name;
                resource.description = instance.res_desc;
                let total = 0;
                payload.resources.forEach((current) => {
                    if (current.id === resource.id) {
                        total++
                    }
                })
                if (!total) {
                    payload.resources.push(resource)
                }
            })
            return [payload];
        })
}

function createProject(newProject) {
    return db('projects')
        .insert(newProject)
}

function addTaskToProject(newTask) {
    return db('tasks')
        .insert(newTask)
}
