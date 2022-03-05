//instalar dependencia/framework express
const express = require('express');
const mongoose = require('./database/index')

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(express.urlencoded({ extends: true }));


app.listen(PORT, () => {
    console.log('Servidor rodando....');
})





//ROTAS DA API
app.get('/', (req, res) => {

    res.send("<h1>Conectado com sucesso!</h1><h3>Configurações realizadas corretamente!</h3><p>As configurações do node ao mongo foram feitas corretamente!</p>")
})

const personRoutes = require('./routes/personsRoutes')

app.use('/person',personRoutes)

/* 
comandos npm init- criar arquivo json;
yarn add express;
yarn add mongosse;

*/
