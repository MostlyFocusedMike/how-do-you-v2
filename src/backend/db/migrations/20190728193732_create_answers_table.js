// Many to many table
exports.up = (knex) => {
    return knex.schema.createTable('answers', (table) => {
        table.increments().primary();
        table.string('content').notNullable();
        table.integer('language_id').unsigned().notNullable();
        table.foreign('language_id').references('id').inTable('languages').onDelete('CASCADE'); // cascade deletes this join when the foreign row is deleted
        table.integer('question_id').unsigned().notNullable();
        table.foreign('question_id').references('id').inTable('questions').onDelete('CASCADE');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = (knex) => {
    return knex.schema.dropTable('answers');
};
