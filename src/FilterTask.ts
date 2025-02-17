/**
 *  { id: 0, name: 'Workout', status: 'Pending' }
 * Search a task by status and then display it
 */

import { toDoList } from "./AddNewTask";
import { getUpdatedToDoList, reorderTasks } from "./DeleteTask";
import { Task } from "./Types";

function filterTasksByStatus(statusFilter:string): Task[] | undefined {
    const updatedToDoList = getUpdatedToDoList();
    const filteredTasks: Task[] = updatedToDoList.filter((task)=> task.status === statusFilter); 
    // The filteredTasks array will always be defined after the .filter() method is called, even if it's empty

    if(filteredTasks.length === 0){
        console.log(`No tasks found for "${statusFilter}" status`, "\n----------------------------------------------------");
        return;
    }

    const reorderedFilteredTasks: Task[] = reorderTasks(filteredTasks);
    console.log(`Filtered tasks by "${statusFilter}" status`, "\n", reorderedFilteredTasks,  "\n----------------------------------------------------");
    return reorderedFilteredTasks;
}

export {filterTasksByStatus};