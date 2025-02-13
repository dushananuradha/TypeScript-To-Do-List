import { Task } from "./Types";


let nextTaskID: number = 0;

const toDoList: Task[] = [
    { id: nextTaskID++, name: "Workout", status: "Pending" }
]

function addNewTaskToDo(newTask: Omit<Task, "id">): Task {
    const newTaskToAdd = {
        id: nextTaskID++,
        ...newTask
    }
    toDoList.push(newTaskToAdd);
    return newTaskToAdd;
}

export {toDoList, addNewTaskToDo};