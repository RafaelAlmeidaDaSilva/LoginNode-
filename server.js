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

//mongodb+srv://userLogin:adminloginnode@cluster0-l4v1z.mongodb.net/test?retryWrites=true&w=majority
//inciando banco de dados 
//  mongoose.connect('mongodb://localhost:27017/Secretaria',{useNewUrlParser:true,useUnifiedTopology: true});

const router = express.Router();

// this is our MongoDB database
const dbRoute =
    'mongodb+srv://userLogin:adminloginnode@cluster0-l4v1z.mongodb.net/test?retryWrites=true&w=majority';

mongoose.Promise = global.Promise;

// connects our back end code with the database
mongoose.connect(dbRoute, 
    {   useNewUrlParser: true,
        useUnifiedTopology: true
    });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

//registre models
requireDir('./src/models');
// const Users = mongoose.model('Users');

app.use('/api', require('./src/routes'));
app.listen(3001);