const { Router } = require("express");
const itemRoute = Router();
const { ItemController } = require("../controllers");

itemRoute.get("/", ItemController.getAllUsers);
itemRoute.post("/register", ItemController.register);
itemRoute.post("/login", ItemController.login);
itemRoute.delete("/delete/:id", ItemController.delete);
itemRoute.put("/update/:id", ItemController.update);

module.exports =itemRoute;