exports.seed = function (knex, Promise) {
  // Inserts seed entries
  return knex('steps').insert([{
      step_number: 1,
      instructions: 'mix 4 cups of milk with 5 cups of flour in a large cake pan',
      recipe_id: 1,
    },
    {
      step_number: 2,
      instructions: 'cut up 1 tomato and mix into the batter',
      recipe_id: 1,
    },
    {
      step_number: 3,
      instructions: 'bake for 20 minutes at 400 degrees',
      recipe_id: 1,
    },
    {
      step_number: 1,
      instructions: 'mix 2 cups of flour with 1 cup of milk. ',
      recipe_id: 2,
    },
    {
      step_number: 2,
      instructions: 'crack 5 eggs and throw them in the trash',
      recipe_id: 2,
    },
    {
      step_number: 3,
      instructions: 'Boil 5 pieces of broccoli until a faint cry from your children can be heard.',
      recipe_id: 2,
    }, 
    {
      step_number: 4,
      instructions: 'Cook pancakes and serve with the broccoli',
      recipe_id: 2,
    },
    {
      step_number: 1,
      instructions: 'grab a pound of ground beef',
      recipe_id: 3,
    },
    {
      step_number: 2,
      instructions: 'realize its still frozen and you cant use it',
      recipe_id: 3,
    },
    {
      step_number: 3,
      instructions: 'go to taco bell instead',
      recipe_id: 3,
    },
  ]);
};