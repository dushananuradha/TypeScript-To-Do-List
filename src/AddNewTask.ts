import { TasksInterface } from "./TasksInterface";
import { Task } from "./Types";


let nextTaskID: number = 0;

// const toDoList: Task[] = [
//     { id: nextTaskID++, name: "Workout", status: "Pending" }
// ]

// // Updated toDoList
// let updatedToDoList: Task[] = [...toDoList];

// function addNewTaskToDo(newTask: Omit<Task, "id">): Task {
//     const newTaskToAdd = {
//         id: nextTaskID++,
//         ...newTask
//     }
//     toDoList.push(newTaskToAdd);
//     return newTaskToAdd;
// }

// function getTaskIndex(taskName: String): number {
//     const index: number = toDoList.findIndex(task => task.name === 'Do Uber Eats');
//     console.log(`Task \"${taskName}\" index: ${index} \n----------------------------------------------------`);
//     return index;
// }

// function displayToDoList(): void {
//     // toDoList.forEach((task) => {
//     //     console.log(task, "\n----------------------------------------------------");
//     // })
//     console.log(toDoList, "\n----------------------------------------------------");
// }


// export {toDoList, updatedToDoList, addNewTaskToDo, getTaskIndex, displayToDoList};

export class AddNewTask {
  private taskManager: TasksInterface;

  constructor(taskMng: TasksInterface) {
    this.taskManager = taskMng;
  }

  public addNewTask(newTask: Omit<Task, "id">): void {
    this.taskManager.addNewTaskToDo(newTask);
  }
}