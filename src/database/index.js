const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.DB)
    .then(() => {
        console.log("Banco de dados conectado com sucesso!");
    })
    .catch((error => {
        console.log("Houve um erro ao se conectar ao banco de dados! \n" + error);
    }))


mongoose.Promise = global.Promise;
module.exports = mongoose;