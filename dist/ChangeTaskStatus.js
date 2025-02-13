"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTaskByID = getTaskByID;
exports.updateTaskStatus = updateTaskStatus;
const AddNewTask_1 = require("./AddNewTask");
/**
 * Get task[i] from todoList[]
 * Get task by ID - find()
 * Get task by status - filter()
 * task[i].status == "newStatus"
 *
 */
function getTaskByID(taskID) {
    const searchTask = AddNewTask_1.toDoList.find((toDoTaskID) => toDoTaskID.id === taskID);
    if (!searchTask) {
        return `Search taskID ${taskID} not found in toDoList[]`;
    }
    console.log("found task: ", AddNewTask_1.toDoList[taskID]);
    return searchTask;
}
function updateTaskStatus(taskToUpdateStatus, newStatus) {
    if (typeof taskToUpdateStatus === 'string') {
        console.error(taskToUpdateStatus);
        return;
    }
    // Access and update the status property
    taskToUpdateStatus.status = newStatus;
    console.log(`Task with updated status: `, taskToUpdateStatus);
    return taskToUpdateStatus;
}
//# sourceMappingURL=ChangeTaskStatus.js.map