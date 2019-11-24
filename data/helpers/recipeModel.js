const db = require('../db-config.js');


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipeById
}

function getRecipes() {
    return db('recipes');
};

function getShoppingList(id) {
    return db('recipes as r')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .join('recipe_ingredients as ri', 'ri.recipe_id', 'r.id')
    .select('i.ingredient_name', 'ri.ingredient_quantity')
    .where({ recipe_id: id });
};

// get steps for a specific recipe
function getInstructions(recipe_id) {
    
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