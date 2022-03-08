const mongoose = require('../database');

const Product = mongoose.model("Product", {
    product_name: String,
    product_cost: Number,
    product_amount: Number,
    product_ingredients: Array
});

module.exports = Product;



