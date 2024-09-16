exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('ingredients').insert([{
      ingredient_name: 'tomato'
    },
    {
      ingredient_name: 'broccoli'
    },
    {
      ingredient_name: 'ground beef'
    },
    {
      ingredient_name: 'flour'
    },
    {
      ingredient_name: 'egg'
    },
    {
      ingredient_name: 'milk'
    },
    {
      ingredient_name: 'sugar'
    },
    {
      ingredient_name: 'lettuce'
    },
  ]);
};