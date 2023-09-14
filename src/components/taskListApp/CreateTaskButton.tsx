import React, { SyntheticEvent } from "react";

const actionClick = (event: SyntheticEvent) => {
    console.log("Click en boton");
    console.log(event.target);
}
const CreateTaskButton = () => {
    return (
        <button className="CreateTaskButton" onClick={actionClick} >+</button>
    );
}

export {CreateTaskButton};
