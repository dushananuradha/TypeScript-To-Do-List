
/**
 * Get task[i] from todoList[]
 * Get task by ID - find()
 * Get task by status - filter()
 * task[i].status == "newStatus"
 * 
 */

// // const updatedToDoList: Task[] = getUpdatedToDoList();

// // function getTaskByID(taskID: number): Task | undefined {
// //     console.log("updatedToDoList in getTaskByID:", updatedToDoList);
// //     const searchTask = updatedToDoList.find((toDoTaskID) => toDoTaskID.id === taskID);
// //     if (!searchTask) {
// //         console.log(`Search taskID ${taskID} not found in toDoList[]`);
// //         return;
// //     }
// //     console.log("found task: ", toDoList[taskID]);
// //     return searchTask;
// // }

// // function getTaskByName(taskName: string): Task | undefined {
// //     const searchTask = toDoList.find((toDoTaskName ) => toDoTaskName.name === taskName);
// //     if (!searchTask) {
// //         console.log(`Search task ${taskName} not found in toDoList[]`);
// //         return;
// //     }
// //     console.log("found task: ", taskName);
// //     return searchTask;
// // }

// // function updateTaskStatus(taskToUpdateStatus: Task | undefined, newStatus: Status): Task | undefined {
// //     if (typeof taskToUpdateStatus === 'undefined') {
// //         console.error(taskToUpdateStatus);
// //         return;
// //     }

// //     // Access and update the status property
// //     taskToUpdateStatus.status = newStatus;
// //     console.log(`Task with updated status: `, taskToUpdateStatus, "\n----------------------------------------------------");
// //     return taskToUpdateStatus;
// // }


// // export { getTaskByID, updateTaskStatus, getTaskByName }



import { TasksInterface } from "./TasksInterface";
import { Status, Task } from "./Types";

export class ChangeTaskInfo {
  private taskManager: TasksInterface;

  constructor(taskMng: TasksInterface) {
    this.taskManager = taskMng;
  }

  public updateTaskName(taskId: number, newTaskName: String): void {
    this.taskManager.updateTaskName(taskId, newTaskName);
  }

  public updateTaskStatus(taskId: number, newStatus: Status): void {
    this.taskManager.updateTaskStatus(taskId, newStatus);
  }

  public updateMultipleTasksStatus(multipleTasks: Omit<Task, "name">[]): void {
    this.taskManager.updateMultipleTasksStatus(multipleTasks);
  }
}