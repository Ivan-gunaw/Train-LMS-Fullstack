const { User } = require("../models");

class UserController {
  static getUsers(req, res) {
    User.findAll()
      .then((users) => {
        // res.send(users);
        res.render("user.ejs");
      })
      .catch((err) => {
        res.send(err);
      });
  }
  static create(req, res) {
    const { username, email, password, image } = req.body;
    User.create({
      username,
      email,
      password,
      image,
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static getUserById(req, res) {
    const id = +req.params.userId;
    User.findByPk(id)
      .then((result) => {
        result
          ? res.send(result)
          : res.send({
              message: `User id ${id} not found.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static delete(req, res) {
    const id = Number(req.params.id);
    User.destroy({
      where: { id },
    })
      .then((result) => {
        result === 1
          ? res.send({
              message: `User id ${id} has been deleted.`,
            })
          : res.send({
              message: `User has not been deleted.`,
            });
      })
      .catch((err) => {
        res.send(err);
      });
  }

  static update(req, res) {
    const id = Number(req.params.id);
    const { username, email, password, image } = req.body;
    User.update(
      {
        username,
        email,
        password,
        image,
      },
      {
        where: { id },
      }
    )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = UserController;