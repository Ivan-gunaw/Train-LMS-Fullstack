import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

import { MdOutlineDeleteOutline, MdInfoOutline } from "react-icons/md";

const MainContent = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("");

  const getTodos = async () => {
    try {
      const todos = await axios({
        method: "get",
        url: `http://localhost:3000/todos`,
      });

      //   console.log(todos.data);
      setTodos(todos.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("useEffect fire");
    getTodos();
  }, []);

  const addTodo = async () => {
    try {
      const result = await axios({
        method: "post",
        url: `http://localhost:3000/todos`,
        data: {
          task,
          status,
        },
      });
      // console.log(result);
      Swal.fire("Good job!", "Task has been successfully added", "success");
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addTodo();
  };

  const deleteTodo = async (id) => {
    try {
      await axios({
        method: "delete",
        url: `http://localhost:3000/todos/${id}`,
      });
      getTodos();
    } catch (err) {
      console.log(err);
    }
  };

  const deleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTodo(id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const getTaskById = async (taskId) => {
    try {
      const result = await axios({
        method: "GET",
        url: `http://localhost:3000/todos/${taskId}`,
      });
      //   console.log(result.data);
      const { id, task, status } = result.data;
      Swal.fire(
        "Task details",
        `Task ${id} - ${task}. Status: ${status}`,
        "info"
      );
    } catch (err) {
      console.log(err);
    }
  };
  //   const todoHandler = () => {
  //     getTodos();
  //   };

  return (
    <div className="main-content container">
      <div className="row">
        <div className="col-12">
          <h3>Todo Apps</h3>
          <hr />
        </div>
        <div className="col-4">
          <h3>Add Task</h3>
          <hr />
          <form>
            <div className="mb-3">
              <label>Task</label>
              <input
                onChange={(e) => setTask(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label>Status</label>
              <input
                onChange={(e) => setStatus(e.target.value)}
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <button onClick={submitHandler} className="btn btn-success w-100">
                + Add Todo
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          {/* <button onClick={todoHandler} className="btn btn-primary btn-sm">
            Get Todos
          </button> */}

          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.length !== 0 ? (
                todos.map((todo) => {
                  const { id, task, status } = todo;
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{task}</td>
                      <td>{status}</td>
                      <td>
                        <button
                          onClick={() => deleteHandler(id)}
                          className="btn btn-danger btn-sm me-2"
                        >
                          <MdOutlineDeleteOutline className="me-2" />
                          Delete
                        </button>
                        <button
                          onClick={() => getTaskById(id)}
                          className="btn btn-info btn-sm"
                        >
                          <MdInfoOutline className="me-2" />
                          More Info
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={3}>
                    <h3>There's no data.</h3>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainContent;