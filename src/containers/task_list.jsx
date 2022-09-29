import React from 'react';
import TaskComponent from '../components/pure/task';
import { LEVELS } from '../models/level.enum';
import { Task } from '../models/task.class';

const TaskListComponent = () => {
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);
    
    const changeState = (id) =>{
        console.log('TODO: Cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
               <h1>Your Tasks:</h1>
            </div>
            {/* TODO: aPILICAR UN for/map para redendizar una lista */}
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
}

export default TaskListComponent;
