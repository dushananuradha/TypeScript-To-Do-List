/**
 * To-do list []
 * add new task to to-do list [] >> todolist.push()
 * view To-do list[]
 */

// import { addNewTaskToDo, displayToDoList, getTaskIndex, toDoList } from "./AddNewTask";
import { Task } from "./Types";
// import { getTaskByID, getTaskByName, updateTaskStatus } from "./ChangeTaskStatus";
// import { deleteTaskByID, getUpdatedToDoList } from "./DeleteTask";
// import { filterTasksByStatus } from "./FilterTask";
import { TaskManager } from "./TaskManager";
import { AddNewTask } from "./AddNewTask";
import { ChangeTaskInfo } from "./ChangeTaskInfo";


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

let newTask5: Omit<Task, "id"> = {
    name: "Playing Guitar", status: "Pending"
}


const taskManager = TaskManager.getInstance(); 
const taskAdd = new AddNewTask(taskManager);
const taskEdit = new ChangeTaskInfo(taskManager);

taskAdd.addNewTask(newTask);
taskAdd.addNewTask(newTask2);
taskAdd.addNewTask(newTask3);

taskManager.getToDoList();

taskAdd.addNewTask(newTask4);
taskAdd.addNewTask(newTask5);
taskManager.getToDoList();

taskEdit.updateTaskName(30, "Uber Eats Lunch and Dinner Times");
taskManager.getToDoList();

const multipleTasksStatus: Omit<Task, "name"> [] = [
    {id: 1, status: "In Progress"},
    {id: 3, status: "Completed"},
    {id: 5, status: "Postponed"}
]
taskEdit.updateTaskStatus(4, "In Progress");
taskManager.getToDoList();

taskEdit.updateMultipleTasksStatus(multipleTasksStatus);
taskManager.getToDoList();