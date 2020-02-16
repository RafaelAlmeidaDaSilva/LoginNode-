const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

// iniciando o app 
const app = express();

// permitir json 
app.use(express.json());

// permitir acesso a todos os dominios
app.use(cors());

//inciando banco de dados 
 mongoose.connect('mongodb://localhost:27017/Secretaria',{useNewUrlParser:true,useUnifiedTopology: true});

//registre models
requireDir('./src/models');
// const Users = mongoose.model('Users');

app.use('/api', require('./src/routes'));
app.listen(3001);