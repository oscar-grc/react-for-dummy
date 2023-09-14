import React from "react";

type Props = {
    children: JSX.Element | JSX.Element[]
}
const TaskList = ({children}: Props ): JSX.Element => {
    return (
        <ul className="TaskList">
            {children}
        </ul>
    );
};

export {TaskList};