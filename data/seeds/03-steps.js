exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('steps').insert([{
      step_number: 1,
      instructions: 'mix 4 cups of milk with 5 cups of flour and cut up 1 tomato, bake until done',
      recipe_id: 1,
    },
    {
      step_number: 1,
      instructions: 'mix 2 cups of flour with 1 cup of milk. After that crack 5 eggs and throw them in the trash. Boil 5 pieces of broccoli until a faint cry from your children can be heard. After that serve the pancakes with the broccoli',
      recipe_id: 2,
    },
    {
      step_number: 1,
      instructions: 'grab a pound of ground beef and cook until brown, cut up 1 head of lettuce and serve on top of the cook ground beef',
      recipe_id: 3,
    }
  ]);
};