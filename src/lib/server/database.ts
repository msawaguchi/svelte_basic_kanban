interface Column {
    id: number
    title: string
    items: Task[]
}

interface Task {
    id: number
    title: string
    description: string
    tags: string[]
}

let tasks: Column[] = [
    {
        id: 1,
        title: "💡 IDEAS / BACKLOG",
        items: [
            {
                id: 11,
                title: "Awesome Task 1",
                description: "This task must be done gracefully.",
                tags: ["Medium Priority", "Front-end"]
            },
            {
                id: 12,
                title: "Awesome Task 2",
                description: "Another task that should be done with love.",
                tags: ["Low Priority", "Back-end"]
            },
            {
                id: 13,
                title: "Awesome Task 3",
                description: "Another task example that needs more briefing.",
                tags: ["Low Priority", "Front-end"]
            }
        ]
    },
    {
        id: 2,
        title: "📫 TO DO",
        items: [
            {
                id: 112,
                title: "Awesome Task 4",
                description: "Ready to Dev task~!!!",
                tags: ["High Priority", "Front-end"]
            },
            {
                id: 122,
                title: "Awesome Task 5",
                description: "This task is waiting to be developed by some nice dev.",
                tags: ["High Priority", "Front-end"]
            },
            {
                id: 132,
                title: "Awesome Task 6",
                description: "Another ready to dev task... someone notice me!!!",
                tags: ["Low Priority", "Back-end"]
            }
        ]
    },
    {
        id: 3,
        title: "👨‍💻 DEVELOPING",
        items: [
            {
                id: 213,
                title: "Awesome Task 7",
                description: "Very interesting and cool new feature being built here.",
                tags: ["Low Priority", "Back-end"]
            },
            {
                id: 223,
                title: "Awesome Task 8",
                description: "Some dev is doing his best right now here.",
                tags: ["Medium Priority", "Front-end"]
            },
            {
                id: 233,
                title: "Awesome Task 9",
                description: "Carefuuuuuully developing! Be patient...",
                tags: ["High Priority", "Front-end"]
            },
            {
                id: 225,
                title: "Awesome Task 10",
                description: "Don't bother!! This dev is focusing on this task!",
                tags: ["Medium Priority", "Devops"]
            }
        ]
    },
    {
        id: 5,
        title: "🔍 REVIEWING",
        items: [
            {
                id: 215,
                title: "Awesome Task 11",
                description: "What? Am I seeing a bug right there?",
                tags: ["Medium Priority", "Devops"]
            },
            {
                id: 235,
                title: "Awesome Task 12",
                description: "This task looks nice and all the tests seems ok...",
                tags: ["Low Priority", "Front-end"]
            }
        ]
    },
    {
        id: 6,
        title: "✅ DONE",
        items: [
            {
                id: 316,
                title: "Awesome Task 13",
                description: "Success!! Task merged and now we have a new page!",
                tags: ["High Priority", "Front-end"]
            },
            {
                id: 326,
                title: "Awesome Task 14",
                description: "The wait was worth it!",
                tags: ["Medium Priority", "Back-end"]
            },
            {
                id: 336,
                title: "Awesome Task 15",
                description: "Finally this task is done! Bravooo!!!!!",
                tags: ["Low Priority", "Front-end"]
            }
        ]
    },
]


export function getTasks() {
    return tasks
}

export function addTask(task: Task) {
    const newTask: Task = {
        id: Date.now(),
        title: task.title,
        description: task.description,
        tags: task.tags
    }

    tasks[0].items.push(newTask)
}
