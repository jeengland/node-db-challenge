
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Add knex seeds and migrations', description: 'Seeds are a stretch, not MVP', completed: false},
        {id: 2, name: 'Add database helpers', description: 'These aren\'t MVP, but they\'ll make life a lot easier.', completed: false},
        {id: 3, name: 'Add API endpoints', description: 'Check README for list of necessary endpoints', completed: false}
      ]);
    });
};
