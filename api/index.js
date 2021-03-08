const express = require('express');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://todo:robbyson@todo.iazl7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true });
mongoose.connection.once('open', function () {
    console.log('Conexão com o banco de dados efetuada!')
}).on('erro', function () {
    console.log('Erro na conexão com o banco de dados')
})

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./src/routes.js'));


app.listen(process.env.PORT || 3000);