interface Task {
    id: number,
    name: string,
    status: Status
}

type Status = "Pending" | "In Progress" | "Completed" | "Postponed";


export { Task, Status };