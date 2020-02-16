// CREATE TABLE les10.FICHAS (
//     id_ficha int not null PRIMARY KEY,
//     val_dotacao number(10,2) not null,
//     dt_controle DATE DEFAULT (sysdate),
//     qtd_updt int not null,
//     fk_id_classificacao int not null,
//     fk_id_investimentos int not null
//     );
    
// const mongoose = require('mongoose');

// const fichaSchema = new mongoose.Schema({
//     theme:{type: String, require:true},
//     title:{ type: String, required:true},
//     value_allocation:{type:Float32Array, require:true},
//     date_val:{type:Date, require:true},
//     createAt:{ type: Date, default: Date.now}
// });