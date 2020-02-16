const mongoose = require('mongoose');
const Users = mongoose.model('Users');

module.exports = {
    async signIn(req, res){
        const { page = 1 } = req.query;
        const users = await Users.paginate({},{page,limit:10});

        return res.json(users);
    },
    async signUp(req, res){
        const user = await Users.create(req.body);
        return res.json(user);
    },
    async showUser(req, res){
        const user = await Users.findById(req.params.id)
        return res.json(user);
    },
    async update(req, res){
        const user = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(user);
    },
    async destroy( req, res){
         await Users.findByIdAndRemove(req.params.id)
         return res.send();
    }
}