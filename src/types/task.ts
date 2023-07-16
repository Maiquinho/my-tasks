export interface Task {
    id: string;
    name: string;
    date: string;
    done: boolean;
}

export type Tasks = Task[];

export type ActionType = {
    type: string;
    payload?: {
        id?: string;
        name?: string;
        date?: string;
        done?: boolean;
    } 
}