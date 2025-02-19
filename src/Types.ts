interface Task {
   readonly id: number,
    name: String,
    status: Status
}

type Status = "Pending" | "In Progress" | "Completed" | "Postponed";


export { Task, Status };