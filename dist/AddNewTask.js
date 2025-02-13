"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDoList = void 0;
exports.addNewTaskToDo = addNewTaskToDo;
let nextTaskID = 0;
const toDoList = [
    { id: nextTaskID++, name: "Workout", status: "Pending" }
];
exports.toDoList = toDoList;
function addNewTaskToDo(newTask) {
    const newTaskToAdd = Object.assign({ id: nextTaskID++ }, newTask);
    toDoList.push(newTaskToAdd);
    return newTaskToAdd;
}
//# sourceMappingURL=AddNewTask.js.map