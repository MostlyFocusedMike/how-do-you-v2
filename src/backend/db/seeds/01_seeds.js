/* eslint-disable no-await-in-loop */
const User = require('../../models/user');
const Category = require('../../models/category');
const Language = require('../../models/language');

exports.seed = async (knex) => {
    await knex('users').del();
    await knex('categories').del();
    await knex('languages').del();

    await User.create({
        email: 'tom@gmail.com',
        password: "$2b$08$CmU18c7KwY85qLiS6NBRR.r8Zb/K9hIVeFtPeXW/rFCzdVb4i0kxu",
    });

    const js = await Language.create({
        name: 'JavaScript',
    });
    console.log('js: ', js);
    await Category.createManyWithRelations([
        {
            name: 'Arrays/Lists',
            questions: [
                {
                    content: 'Create a new array?',
                    answers: [
                        {
                            content: 'Array.new(), []',
                            language_id: js.id,
                        }
                    ]
                },
                {
                    content: 'Show length of an array?',
                    answers: [
                        {
                            content: 'arr.length',
                            language_id: js.id,
                        }
                    ]
                },
            ]
        },
        {
            name: 'Objects/Hashes'
        },
        {
            name: 'classes'
        }
    ])

    // see what was made
    const categories = await Category.all();

    for (let i = 0; i < categories.length; i++) {
        console.log('category: ', categories[i]);
        const questions = await categories[i].relations('questions');
        for (let j = 0; j < questions.length; j++) {
            console.log(questions[j]);
            const answers = await questions[j].relations('answers');
            console.log(answers);
        }
    }
};
