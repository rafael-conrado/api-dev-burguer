const Combo = require("../models/Combo");
const router = require('express').Router();
require('dotenv').config();

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
router.get('/', async (req, res) => {


    try {
        const combos = await Combo.find();
        res.status(200).json(combos);

    } catch (error) {
        res.status(500).json({ error: error });
    }
});

//Atualizar combo
router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const { combo_name, combo_cost, combo_amount, combo_products } = req.body;

    const combo = { combo_name, combo_cost, combo_amount, combo_products };

    try {
        const updatedCombo = await Combo.updateOne({_id:id},combo);

        if (updatedCombo.matchedCount === 0) {
            res.status(422).json({message:"Erro ao atualizar combo!"});
            return;
        }

        res.status(200).json(combo);

    } catch (error) {
        res.status(500).json({ error: error });
    }

})

//Deletar combo
router.delete("/:id",async (req,res)=>{
    const id= req.params.id;

    const combo = await Combo.findOne({_id:id});

    if (!combo) {
        res.status(422).json({message:"Combo não encontrado!"});
        return;
    }

    try {
        await Combo.deleteOne({_id:id});
        res.status(200).json({message:"Combo deletado!"});

    } catch (error) {
        res.status(500).json({error:error});
    }

})




module.exports = router;