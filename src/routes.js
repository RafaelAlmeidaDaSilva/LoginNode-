const express = require('express');
const routes = express.Router();


const UserController = require('./controllers/UsersController')

routes.get("/SignIn", UserController.signIn);
routes.post("/SignUp", UserController.signUp);
routes.get("/Show/:id", UserController.showUser);
routes.put("/Update/:id", UserController.update)
routes.delete("/Delete/:id", UserController.destroy);

module.exports = routes;