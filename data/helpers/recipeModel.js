const db = require('../db-config.js');


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeById,
    getRecipesByIngredient
}

function getRecipes() {
    return db('recipes');
};

function getShoppingList(id) {
    return db('recipe_ingredients as ri')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .select('i.ingredient_name as name', 'ri.ingredient_quantity as quantity')
    .where({ recipe_id: id });
};

// get steps for a specific recipe
function getInstructions(recipe_id) {
    return db('steps as s').where({ recipe_id }).orderBy('step_number');
};

// should return the recipe with the shopping list and steps involved
function getRecipeById(recipe_id) {
    let query = db('recipes as r');
    
    if(recipe_id) {
       query.where('r.id', recipe_id).first();

        const promises = [query, this.getShoppingList(recipe_id)];

        return Promise.all(promises).then(results => {
            let [recipe, shoppingList] = results;

            if(recipe) {
                recipe.shoppingList = shoppingList;

                return recipe;
            } else {
                return null;
            }
        });
    }

    return query;
};

function getRecipesByIngredient(id) {
    return db('recipes')
           .join('recipe_ingredients as ri', 'ri.recipe_id', 'recipes.id')
           .select('ri.recipe_id', 'recipe_name')
           .where({ ingredient_id: id });
};