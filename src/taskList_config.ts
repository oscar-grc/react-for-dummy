export interface TaskListConfig {
    github_access_token: string,
    widgets: {
        id: string,
        repository_url: string        
    }[];
}

const config: TaskListConfig = {
    github_access_token: "" as string,
    widgets: [
        {
            id: "",
            repository_url: ""
        }
    ] 
}

export {config};