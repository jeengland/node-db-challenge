
exports.up = function(knex) {
    return knex.schema 
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.string('name').unique().notNullable();
            tbl.string('description');
            tbl.boolean('completed').defaultTo(0);
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.string('name').unique().notNullable();
            tbl.string('description').notNullable();
        })
        .createTable('project_resources', tbl => {
            tbl.increments();
            tbl
                .integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
            tbl
                .integer('resource_id')
                .notNullable()
                .references('id')
                .inTable('resources')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE');
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.string('description').notNullable();
            tbl.string('notes');
            tbl.boolean('completed').defaultTo(0);
            tbl
                .integer('project_id')
                .notNullable()
                .references('id')
                .inTable('projects')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
    .dropTableIfExists('project_resources')
    .dropTableIfExists('tasks')
};
