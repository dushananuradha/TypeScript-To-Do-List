import { Status, Task } from "./Types";
import { toDoList } from "./AddNewTask";

/**
 * Get task[i] from todoList[]
 * Get task by ID - find()
 * Get task by status - filter()
 * task[i].status == "newStatus"
 * 
 */

function getTaskByID(taskID: number): Task | string {
    const searchTask = toDoList.find((toDoTaskID) => toDoTaskID.id === taskID);
    if (!searchTask) {
        return `Search taskID ${taskID} not found in toDoList[]`
    }
    console.log("found task: ", toDoList[taskID]);
    return searchTask;
}

function updateTaskStatus(taskToUpdateStatus: Task | string, newStatus: Status): Task | undefined {
    if (typeof taskToUpdateStatus === 'string') {
        console.error(taskToUpdateStatus);
        return;
    }

    // Access and update the status property
    taskToUpdateStatus.status = newStatus;
    console.log(`Task with updated status: `, taskToUpdateStatus, "\n----------------------------------------------------");
    return taskToUpdateStatus
}


export { getTaskByID, updateTaskStatus }