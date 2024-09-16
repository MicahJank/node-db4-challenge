exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('recipes').insert([{
      recipe_name: 'Tomato Cake'
    },
    {
      recipe_name: 'Broccoli Pancakes'
    },
    {
      recipe_name: 'No Shell Tacos'
    }
  ]);
};