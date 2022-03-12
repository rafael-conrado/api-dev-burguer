const Product = require("../models/Product");
const router = require('express').Router();

//Criar produto
router.post("/", async (req, res) => {
    const { product_name, product_cost, product_amount, product_ingredients } = req.body;


    if (!product_name || !product_cost || !product_amount || !product_ingredients) {
        res.status(422).json({ message: "Campos vazios!" });
        return;
    }
    const product = { product_name, product_cost, product_amount, product_ingredients };
    try {
        await Product.create(product);
        res.status(201).json({ message: "Produto criado com sucesso!" });


    } catch (error) {
        res.status(500).json({ error: error });
    }

    res.status(200).json(product);

})

//Listar produtos
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

//Atualizar produto
router.patch("/:id", async (req, res) => {

    const id = req.params.id;

    const { product_name, product_cost, product_amount, product_ingredients } = req.body;

    const product = { product_name, product_cost, product_amount, product_ingredients };

    try {
        const updatedProduct = await Product.updateOne({ _id: id }, product);

        if (updatedProduct.matchedCount === 0) {
            res.status(422).json({ message: "Erro ao atualizar produto!" });
            return;
        }
    } catch (error) {
        res.status(500).json({ error: error });
    }
    res.status(200).json(product);
})

//Deletar produto
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    const product = await Product.findOne({ _id: id });

    if (!product) {
        res.status(422).json({message: "Produto não encontrado!"});
        return;
    }

    try {
        await Product.deleteOne({ _id: id });
        res.status(200).json({message: "Produto deletado!"});
    } catch (error) {
        res.status(500).json({ error: error });
    }
})

module.exports = router;