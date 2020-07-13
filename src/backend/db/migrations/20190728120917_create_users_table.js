// Basic table
exports.up = (knex) => {
    return knex.schema.createTable('users', (table) => {
        table.increments().primary();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.string('role').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('users');
};
