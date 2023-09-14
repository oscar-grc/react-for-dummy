import React from "react";

type Props = {
    completed: number,
    total: number
}

const TaskCounter = ({ completed, total }: Props ) : JSX.Element => {
    return (
        <h1 className="TaskCounter">
            <span>{completed}</span> tasks of <span>{total}</span>
        </h1>
    );
};

export {TaskCounter};