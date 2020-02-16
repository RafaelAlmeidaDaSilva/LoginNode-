const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


const usersSchema = new mongoose.Schema({
    login:{type: String, require:true},
    password:{ type: String, required:true},
    createAt:{ type: Date, default: Date.now}
});

usersSchema.plugin(mongoosePaginate);
mongoose.model('Users', usersSchema);
