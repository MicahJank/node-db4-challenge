const express = require('express');

// import helper file
const Recipe = require('../data/helpers/recipeModel.js');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    const ingredientId = req.params.id;

    Recipe.getRecipesByIngredient(ingredientId)
          .then(recipes => {
              res.json(recipes);
          })
          .catch(err => {
              res.status(500).json({
                  message: 'An error occurred while trying to find the recipes with that ingredient.',
                  error: err
              })
          })
});



module.exports = router;