exports.up = function(knex) {
  //make recipes
  //make ingredients
  // make recipe_ingredients
  // make steps

  return knex.schema
             .createTable('recipes', tbl => {
                 tbl.increments(); //.increments() creates an integer field that is auto-incrementing, not nullable, and unique, and that is specified as the "primary" key field for the table.
                 tbl.string('recipe_name', 255).notNullable();
             })
             .createTable('ingredients', tbl => {
                 tbl.increments();
                 tbl.string('ingredient_name', 255).notNullable();
             })
             .createTable('steps', tbl => {
                 tbl.increments();
                 tbl.integer('step_number').unsigned().notNullable(); // unsigned means the integer cannot be negative
                 tbl.string('instructions', 255).notNullable();
                 // for creating a foreign key - use the CASCADE when you want what happens to the referenced key will affect all child elements that reference it
                 tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE'); 
             })
             .createTable('recipe_ingredients', tbl => {
                 tbl.increments();
                 tbl.integer('recipe_id').unsigned().notNullable().references('recipes.id').onDelete('CASCADE').onUpdate('CASCADE');
                 tbl.integer('ingredient_id').unsigned().notNullable().references('ingredients.id').onDelete('CASCADE').onUpdate('CASCADE');
                 tbl.integer('ingredient_quantity').unsigned().notNullable();
             });
};

exports.down = function(knex) {
    return knex.schema
           .dropTableIfExists('recipe_ingredients')
           .dropTableIfExists('steps')
           .dropTableIfExists('ingredients')
           .dropTableIfExists('recipes');
};
