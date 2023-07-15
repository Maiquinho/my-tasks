import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Tasks, ActionType } from '../../types/task';
import { firstLetterUpper } from '../../helpers/firstLetterUpper';



const date = new Date();
const stateTaskFormatedDate = {
    weekday: firstLetterUpper(date.toLocaleDateString('pt-br', { weekday: 'short' })).slice(0, -1),
    day: date.toLocaleDateString('pt-br', { day: '2-digit' }),
    monthday: date.toLocaleDateString('pt-br', { day: '2-digit' }),
    month: firstLetterUpper(date.toLocaleDateString('pt-br', { month: 'short' })).slice(0, -1),
    time: date.toLocaleTimeString([], {timeStyle: 'short'})
};



export const tasksInitialState: Tasks = [];

export const getTasksInitialState = () => {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : tasksInitialState;
}

export function tasksReducer(state: Tasks, action: ActionType) {
    switch (action.type) {
        case 'add':
            if (action.payload?.name) {
                let newState = [...state];
                newState.push({
                    id: uuidv4(),
                    name: action.payload.name,
                    date: `${stateTaskFormatedDate.weekday}, ${stateTaskFormatedDate.day} ${stateTaskFormatedDate.month}`,
                    done: false
                });

                return newState;
            }
        break;
        case 'set_checked':
            if(action.payload?.id){
                let newState = [...state];
                
                newState.map(stateItem => {
                    if(stateItem.id == action.payload?.id){ 
                        stateItem.done = !action.payload?.done
                    }
                });
                
                return newState;
            }
        break;
        case 'delete':
            if (action.payload?.id) {
                let newState = [...state];
                newState = newState.filter(stateItem => stateItem.id !== action.payload?.id);
                
                return newState;
            }
        break;
        case 'sort':
            let newState = [...state];
            newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);

            return newState;
        break;
        default: 
            return state;
        break;
    }

    return state;
}


export function useTaskReducer() {
    return useReducer(tasksReducer, tasksInitialState);
}