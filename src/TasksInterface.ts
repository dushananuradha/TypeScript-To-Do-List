import { Status, Task } from "./Types";

export interface TasksInterface {
  getToDoList(): Task[];
  addNewTaskToDo(newTask: Omit<Task, "id">): Task;
  updateTaskStatus(taskId: number, newStatus: Status): void;
  updateMultipleTasksStatus(multipleTasks: Omit<Task, "name">[]): void;
  updateTaskName(taskId: number, newName: String): void;
  deleteTask(taskId: number): void;
  
}

