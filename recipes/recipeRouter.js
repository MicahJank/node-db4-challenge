const express = require('express');

// import helper file
const Recipe = require('../data/helpers/recipeModel.js');

const router = express.Router();

// make routes below
router.get('/', (req, res) => {
    Recipe.getRecipes()
          .then(recipes => {
              res.json(recipes); // default status is 200 remember
          })
          .catch(err => {
              res.status(500).json({
                message: 'An error occurred while trying to get all the recipes from the database',
                error: err
              });
          });
});

router.get('/:id/shoppingList', (req, res) => {
    const recipeId = req.params.id;

    Recipe.getShoppingList(recipeId)
          .then(shoppingList => {
              res.json(shoppingList);
          })
          .catch(err => {
              res.status(500).json({
                  message: 'An error occured while trying to get the shopping list for the recipe.',
                  error: err
              });
          });
});

router.get('/:id/instructions', (req, res) => {
    const recipeId = req.params.id;

    Recipe.getInstructions(recipeId)
          .then(instructions => {
              res.json(instructions);
          })
          .catch(err => {
              res.status(500).json({
                  message: 'An error occurred while trying to get the instructions for the recipe.',
                  error: err
              });
          });
});

router.get('/:id', (req, res) => {
    const recipeId = req.params.id;
    Recipe.getRecipeById(recipeId)
        .then(something => {
            res.json(something);
        })
        .catch(err => {
            res.status(500).json({
                message: 'An error occurred while trying to get the shopping list for the recipe.',
                error: err
            });
        });
});


module.exports = router;