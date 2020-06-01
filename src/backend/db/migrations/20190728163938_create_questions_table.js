// Basic table
exports.up = (knex) => {
    return knex.schema.createTable('questions', (table) => {
        table.increments().primary();
        table.string('content').notNullable();
        table.integer('category_id').references('id').inTable('categories').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('questions');
};
