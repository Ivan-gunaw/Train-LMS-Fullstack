/**
 * let todos = [
  {
    id: 1,
    task: "Belajar js basic",
    status: true,
  },
  {
    id: 2,
    task: "Kerjakan latihan",
    status: false,
  },
  {
    id: 3,
    task: "Makan pagi",
    status: true,
  },
];
 */

let todos = [
    {
        id: 1,
        task: "Belajar js basic",
        status: true,
    },
    {
        id: 2,
        task: "Kerjakan latihan",
        status: false,
    },
    {
        id: 3,
        task: "Makan pagi",
        status: true,
    },
]

// 1) showtoDos exercise
function showtoDos(){
    console.log("to Do List : ");

    for(i = 0; i < todos.length; i++)
    {
        if (todos[i].status === true){
            console.log(todos[i].id + ". " + todos[i].task + ". " + "[X]");
        }else{
            console.log(todos[i].id + ". " + todos[i].task + ". " + "[ ]");
        }
        
    }
}

// 2) submitToDo (task)
function submitToDo(task){
    let id = todos[todos.length - 1].id + 1;
    let status = false;
    todos.push = ({
        id,
        task,
        status,
    });
    console.log("Task " + task + " has been submitted.");
}

// 3) remove Task

function removeTask (id){
    let temp = [];
    for (let i = 0; i < todos.length; i++){
        if (todos[i].id !== id){
            temp.push(todos[i]);
        }
    }
    todos = temp;
    console.log("Task with id " + id + " has been removed.");
}


submitToDo("Belajar oop dan mvc");
showtoDos();
removeTask(3);
