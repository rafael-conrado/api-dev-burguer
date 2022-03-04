const Person = require("../models/Person");
const router = require('express').Router();



router.post("/", async (req, res) => {
    //req body
    const { name, salary, approved } = req.body;

    if (!name || !salary || !approved) {
        res.status(422).json({erro:"Todos os campos são obrigatórios!"})
    }
    const person = { name, salary, approved };
    try {
        await Person.create(person);
        res.status(201).json({ message: "Pessoa inserida com sucesso!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })

    }
})


module.exports = router;