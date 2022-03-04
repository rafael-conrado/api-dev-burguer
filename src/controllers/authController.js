/* const express = require('express');
const { builtinModules } = require('module');
const User = require('../models/user');
const router = express.Router();


router.post('/register', async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.send({ user });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ error: "Falha ao registar usuário" })
    }
})

module.exports = (app)=>{
    app.use('/auth',router)
} */