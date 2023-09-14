import React from "react";
import { TaskSearch } from "./TaskSearch";
import { TaskList } from "./TaskList";
import { TaskItem } from "./TaskItem";
import { TaskCounter } from "./TaskCounter";
import { CreateTaskButton } from './CreateTaskButton';
import '../../assets/styles/global.scss'

export interface BaseTask{
    id: number,
    text: string,
    completed: boolean
}

const defaultTaskList : BaseTask [] = [
    { id:1, text: 'ReactJs', completed: false},
    { id:2, text: 'Oracle', completed: true},
    { id:3, text: 'AWS', completed: false}
];

const TaskListApp = () : JSX.Element => {
    return (
        <>
            <TaskCounter completed={1 as number} total={3 as number} />
            <TaskSearch />
            
            <TaskList>
                {
                    defaultTaskList.map(t => {
                        return (<TaskItem key={t.id} text={t.text} completed={t.completed} />);
                    })
                }
            </TaskList>    

            <CreateTaskButton />        
        </>
    );
};

export {TaskListApp};