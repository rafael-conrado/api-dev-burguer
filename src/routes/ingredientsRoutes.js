const Ingredient = require('../models/Ingredient');
const router = require('express').Router();
require('dotenv').config();

//Criar ingrediente
router.post('/', async (req, res) => {
    const { ingredient_name, ingredient_cost, ingredient_amount } = req.body;

    if (!ingredient_name || !ingredient_cost || !ingredient_amount) {
        res.status(422).json({ message: "Todos os campos são obrigatórios!" });
        return;
    }
    const ingredient = { ingredient_name, ingredient_cost, ingredient_amount };

    try {
        await Ingredient.create(ingredient);
        res.status(201).json({ message: "Ingrediente criado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

//Exibir todos os ingredientes
router.get('/', async (req, res) => {
    try {
        const ingredient = await Ingredient.find();
        res.status(200).json(ingredient);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Atualizar ingrediente
router.patch("/:id", async (req, res) => {
    const id = req.params.id;

    const { ingredient_name, ingredient_cost, ingredient_amount } = req.body;

    const ingredient = { ingredient_name, ingredient_cost, ingredient_amount };

    try {
        const updatedIngredient = await Ingredient.updateOne({ _id: id }, ingredient);

        if (updatedIngredient.matchedCount === 0) {
            res.status(422).json({ message: "Erro ao atualizar ingrediente!" });
            return;
        }
        res.status(200).json(ingredient);

    } catch (error) {
        res.status(500).json({ error: error });
    }
})


//Deletar usuário
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const ingredient = await Ingredient.findOne({ _id: id });

    if (!ingredient) {
        res.status(422).json({message: "Ingrediente não encontrado!"});
        return;
    }

    try {
        await Ingredient.deleteOne({ _id: id });
        res.status(200).json({message: "Ingrediente deletado!"});


    } catch (error) {
        res.status(500).json({ error: error });
    }
})


module.exports = router;    