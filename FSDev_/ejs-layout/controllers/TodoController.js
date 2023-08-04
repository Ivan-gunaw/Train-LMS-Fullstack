// class TodoController {
//     static getTodos(req, res) {
//       res.send("Todos Page");
//     }
//     static create(req, res) {
//       res.send("Create Todo page");
//     }
//   }
  
//   module.exports = TodoController;
const { Todo } = require('../models');

  class TodoController {
    static getTodos(req, res) {
        Todo.findAll()
        .then((todos) => {
            // res.send(todos);
            res.render("todo.ejs", { todos });
        })
        .catch((err) => {
            res.send(err);
        });
    }
    static create(req, res) {
        const { task, status } = req.body;
        Todo.create({
            task,
            status,
        })
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                res.send(err);
            });

        // res.send("Create Todo page");
    }

    static createPage(req,res) {
        res.render("createTodo.ejs");
    }

    static getTodoById(req,res) {
        const id = +req.params.todoId;
        console.log(req.params);
        Todo.findByPk(id)
            .then((result) => {
                result
                    ? res.send(result)
                    : res.send({
                        message: `Task id ${id} not found.`
                    });
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static delete(req,res) {
        const id = Number(req.params.id);
        Todo.destroy({
            where: ( id ),
        })
            .then((result) => {
                result === 1
                    ? // ? res.send({
                    //     message: `Task id ${id} has been deleted.`,
                    // })
                    res.redirect("/todos")
                    : res.send({
                        message: `Task has not been deleted.`,
                    });
            })
            .catch((err) => {
                res.send(err);
            });
    }

    static update(req, res) {
        const id = Number(req.params.id);
        const {task, status} = req.body;
        Todo.update(
            {
                task,
                status,
            },
            {
                where: ( id ),
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

  
  module.exports = TodoController;