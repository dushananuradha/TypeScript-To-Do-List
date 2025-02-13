/**
 * To-do list []
 * add new task to to-do list [] >> todolist.push()
 * view To-do list[]
 */

import { addNewTaskToDo, toDoList } from "./AddNewTask";
import { Task } from "./Types";
import { getTaskByID, updateTaskStatus } from "./ChangeTaskStatus";
import { deleteTaskByID } from "./DeleteTask";


function displayToDoList(): void {
    // toDoList.forEach((task) => {
    //     console.log(task, "\n----------------------------------------------------");
    // })
    console.log(toDoList, "\n----------------------------------------------------");
}


let newTask: Omit<Task, "id"> = {
    name: "Mow the front yard", status: "Pending"
}

let newTask2: Omit<Task, "id"> = {
    name: "Do Uber Eats", status: "Pending"
}

let newTask3: Omit<Task, "id"> = {
    name: "Read Book", status: "Pending"
}

let newTask4: Omit<Task, "id"> = {
    name: "Code Practice", status: "Pending"
}

function getTaskIndex(taskName: String): number {
    const index: number = toDoList.findIndex(task => task.name === 'Do Uber Eats');
    console.log(`Task \"${taskName}\" index: ${index} \n----------------------------------------------------`);
    return index;
}


addNewTaskToDo(newTask);
addNewTaskToDo(newTask2);
addNewTaskToDo(newTask3);
addNewTaskToDo(newTask4);

displayToDoList();

updateTaskStatus(getTaskByID(1), "Completed");

displayToDoList();

getTaskIndex('Read Book');

deleteTaskByID(3)