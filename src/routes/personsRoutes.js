const Person = require("../models/Person");
const router = require('express').Router();


//criar usuário
router.post("/", async (req, res) => {
    //req body
    const { name, salary, approved } = req.body;

    if (!name || !salary || !approved) {
        res.status(422).json({ erro: "Todos os campos são obrigatórios!" });
        return;
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

//Consultar todos os usuários
router.get('/', async (req, res) => {
    try {
        const people = await Person.find();

        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Consultar usuário
router.get('/:id', async (req, res) => {
    const id = req.params.id


    try {
        const person = await Person.findOne({ _id: id });

        if (!person) {
            res.status(422).json({ message: "Nenhum usuário encontrado!" });
            return;
        }

        res.status(200).json(person);
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

//Atualizar dados

router.patch('/:id', async (req, res) => {
    const id = req.params.id;

    const { name, salary, approved } = req.body;

    const person = {
        name,
        salary,
        approved
    }
    try {

        const updatedPerson = await Person.updateOne({ _id: id }, person);

        if (updatedPerson.matchedCount === 0) {
            res.status(422).json({message: "Erro ao atualizar!"})
        }

        res.status(200).json(person)


    } catch (error) {
        res.status(500).json({ error: error })
    }

})

module.exports = router;