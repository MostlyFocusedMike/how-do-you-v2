// Many to many table
exports.up = (knex) => {
    return knex.schema.createTable('languages', (table) => {
        table.increments().primary();
        table.integer('name').unsigned().notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('languages');
};
