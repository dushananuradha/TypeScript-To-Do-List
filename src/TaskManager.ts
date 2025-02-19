import { TasksInterface } from "./TasksInterface";
import { Status, Task } from "./Types";

export class TaskManager implements TasksInterface {
  private static instance: TaskManager;
  private toDoList: Task[];
  private nextTaskID: number = 1;

  private constructor() {
    this.toDoList = [{ id: this.nextTaskID++, name: "Workout", status: "Pending" }];
  }

  public static getInstance(): TaskManager {
    if (!TaskManager.instance) {
      TaskManager.instance = new TaskManager();
    }
    return TaskManager.instance;
  }

  public getToDoList(): Task[] {
    const updatedToDoList = [...this.toDoList];
    console.log("updated To-Do-List \n", updatedToDoList, "\n------------------------------------------------------------");
    return updatedToDoList;
  }

  public addNewTaskToDo(newTask: Omit<Task, "id">): Task {
    const newTaskToAdd: Task = {
      id: this.nextTaskID++, // Ensure you're using the instance's task ID counter
      ...newTask,
    };
    this.toDoList.push(newTaskToAdd);
    return newTaskToAdd;
  }

  public updateTaskStatus(taskId: number, newStatus: Status): Task | undefined {
    const taskIndex = this.toDoList.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      console.log(`Searched taskID ${taskId} not exist. Update not done.`);
      return;
    }
    this.toDoList[taskIndex].status = newStatus;
    return this.toDoList[taskIndex];
  }

  public updateMultipleTasksStatus(multipleTasks: Omit<Task, "name">[]): void {
    multipleTasks.forEach((taskToUpdate) => {
      const taskIndex = this.toDoList.findIndex((task) => task.id === taskToUpdate.id);
    
      if (taskIndex !== -1) {
        this.toDoList[taskIndex].status = taskToUpdate.status;
      } else {
        console.log(`Task ID ${taskToUpdate.id} not found. Update not done.`);
      }
    });
  }
  
  public updateTaskName(taskId: number, newTaskName: String): Task | undefined {
    const taskIndex = this.toDoList.findIndex((task) => task.id === taskId);
    if (taskIndex === -1) {
      console.log(`Searched taskID ${taskId} not exist. Update not done.`);
      return;
    }
    this.toDoList[taskIndex].name = newTaskName;
    return this.toDoList[taskIndex];
  }

  public deleteTask(taskId: number): void {
    this.toDoList = this.toDoList.filter((task) => task.id !== taskId);
  }

}


