
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Computer', description: 'definitely need this for coding'},
        {id: 2, name: 'Lambda Training Kit', description: 'find at lambdaschool.com'},
        {id: 3, name: 'Knex Documentation', description: 'find at knexjs.org'},
        {id: 4, name: 'List of endpoints', description: 'located in README'}
      ]);
    });
};
