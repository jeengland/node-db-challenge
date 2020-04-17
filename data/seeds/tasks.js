
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Make migrations', notes: 'Reference dbdesigner plan', completed: false, project_id: 1},
        {id: 2, description: 'Make seeds', notes: 'Do this after migration is done', completed: false, project_id: 1},
        {id: 3, description: 'Make get helpers', notes: '', completed: false, project_id: 2},
        {id: 4, description: 'Make update and delete helpers', notes: 'Stretch only', completed: false, project_id: 2},
        {id: 5, description: 'Make challenge specific helpers', notes: '', completed: false, project_id: 2},
        {id: 6, description: 'Make resource get and post', notes: 'MVP', completed: false, project_id: 3},
        {id: 7, description: 'Make project get and post', notes: 'MVP', completed: false, project_id: 3},
        {id: 8, description: 'Make task get and post', notes: 'MVP', completed: false, project_id: 3},
        {id: 9, description: 'Make project update and delete', notes: 'Stretch', completed: false, project_id: 3},
        {id: 10, description: 'Make resource update and delete', notes: 'Stretch', completed: false, project_id: 3},
        {id: 11, description: 'Make task update and delete', notes: 'Stretch', completed: false, project_id: 3}
      ]);
    });
};
