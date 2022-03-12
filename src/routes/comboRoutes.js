const Combo = require("../models/Combo");
const router = require('express').Router();

//Criar combo
router.post('/', async (req, res) => {
    const { combo_name, combo_cost, combo_amount, combo_products } = req.body;

    if (!combo_name || !combo_cost || !combo_amount || !combo_products) {
        res.status(422).json({ message: "Campos vazios!" });
        return;
    };

    const combo = { combo_name, combo_cost, combo_amount, combo_products };
    try {
        await Combo.create(combo);
        res.status(201).json({ message: "Combo criado com sucesso" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Listar combos
router.get('/',async (req,res)=>{
try {
    const combos = await Combo.find();
    res.status(200).json(combos);
    
} catch (error) {
    res.status(500).json({ error: error });
}
});




module.exports = router;