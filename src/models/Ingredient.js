//Model é minha interface com o banco de dados.
const mongoose = require('../database');

const Ingredient = mongoose.model("Ingredient", {
    ingredient_name: String,
    ingredient_cost: Number,
    ingredient_amount: Number
});

module.exports = Ingredient;