/**
 * Search a tak by ID and then delete it
 */


import { toDoList } from "./AddNewTask";
import { Task } from "./Types";


function deleteTaskByID(taskID: number): Task[] | undefined {
    const taskIndex: number = toDoList.findIndex(task => task.id === taskID);

    if (taskIndex === -1) {
        console.log(`Searched taskID not exists`);
        return;
    }

    const deletedTask: Task = toDoList.splice(taskIndex, 1)[0];
    console.log(`Deleted task "${deletedTask.name}" with had ID ${taskID} \n`);

    const updatedToDoList: Task[] = reorderTasks(toDoList);
    console.log(updatedToDoList);
    return updatedToDoList; // Return updated list
}

function reorderTasks(tasks: Task[]): Task[] {
    return tasks.map((task, index) => ({
        ...task,
        id: index
    })
    )
}


export { deleteTaskByID };