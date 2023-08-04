const { Router } = require("express");
const userRoute = Router();
const { UserController } = require("../controllers");

userRoute.get("/", UserController.getAllUsers);
userRoute.post("/register", UserController.register);
userRoute.post("/login", UserController.login);
userRoute.delete("/delete/:id", UserController.delete);
userRoute.put("/update/:id", UserController.update);

module.exports =userRoute;