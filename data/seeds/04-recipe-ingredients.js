exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('recipes').insert([{
      recipe_id: 1,
      ingredient_id: 6,
      ingredient_quantity: 4
    },
    {
      recipe_id: 1,
      ingredient_id: 4,
      ingredient_quantity: 5
    },
    {
      recipe_id: 1,
      ingredient_id: 1,
      ingredient_quantity: 1
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
      ingredient_quantity: 2
    },
    {
      recipe_id: 2,
      ingredient_id: 6,
      ingredient_quantity: 1
    },
    {
      recipe_id: 2,
      ingredient_id: 5,
      ingredient_quantity: 5
    },
    {
      recipe_id: 2,
      ingredient_id: 2,
      ingredient_quantity: 5
    },
    {
      recipe_id: 3,
      ingredient_id: 3,
      ingredient_quantity: 1
    },
    {
      recipe_id: 3,
      ingredient_id: 8,
      ingredient_quantity: 1
    },
  ]);
};