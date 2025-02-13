"use strict";
/**
 * To-do list []
 * add new task to to-do list [] >> todolist.push()
 * view To-do list[]
 */
Object.defineProperty(exports, "__esModule", { value: true });
const AddNewTask_1 = require("./AddNewTask");
const ChangeTaskStatus_1 = require("./ChangeTaskStatus");
function displayToDoList() {
    AddNewTask_1.toDoList.forEach((task) => {
        console.log(task);
    });
}
let newTask = {
    name: "Mow the front yard", status: "Pending"
};
let newTask2 = {
    name: "Do Uber Eats", status: "Pending"
};
let newTask3 = {
    name: "Read Book", status: "Pending"
};
let newTask4 = {
    name: "Code Practice", status: "Pending"
};
const index = AddNewTask_1.toDoList.findIndex(task => task.name === 'Do Uber Eats');
(0, AddNewTask_1.addNewTaskToDo)(newTask);
(0, AddNewTask_1.addNewTaskToDo)(newTask2);
(0, AddNewTask_1.addNewTaskToDo)(newTask3);
(0, AddNewTask_1.addNewTaskToDo)(newTask4);
console.log("----------------------------------------------------");
displayToDoList();
console.log("----------------------------------------------------");
(0, ChangeTaskStatus_1.updateTaskStatus)((0, ChangeTaskStatus_1.getTaskByID)(1), "Completed");
console.log("----------------------------------------------------");
displayToDoList();
console.log(index);
//# sourceMappingURL=index.js.map