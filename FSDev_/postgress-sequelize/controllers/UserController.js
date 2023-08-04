class UserController {
    static getUsers(req, res) {
      res.send("Users Page");
    }
    static create(req, res) {
      res.send("Create User page");
    }
  }
  
  module.exports = UserController;