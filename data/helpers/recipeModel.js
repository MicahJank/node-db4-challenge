const db = require('../db-config.js');


module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipes');
};

function getRecipeIngredients(id) {
    return db('recipes as r')
    .join('ingredients as i', 'i.id', 'ri.ingredient_id')
    .join('recipe_ingredients as ri', 'ri.recipe_id', 'r.id')
    .select('i.ingredient_name', 'ri.ingredient_quantity')
    .where({ recipe_id: id });
};

function getShoppingList(recipe_id) {
    let query = db('recipes as r');
    
    if(recipe_id) {
       query.where('r.id', recipe_id).first();

        const promises = [query, this.getRecipeIngredients(recipe_id)];

        return Promise.all(promises).then(function(results) {
            let [recipe, shoppingList] = results;
            console.log('got here');

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