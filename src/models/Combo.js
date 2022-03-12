const mongoose =  require('../database');
const Combo = mongoose.model("Combo",{
    combo_name: String,
    combo_cost: Number,
    combo_amount:Number,
    combo_products:Array
});

module.exports = Combo;