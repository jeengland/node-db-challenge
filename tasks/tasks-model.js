const db = require('../data/db-config.js');

module.exports = {
    getTasks
}

function getTasks() {
    return db('tasks');
}