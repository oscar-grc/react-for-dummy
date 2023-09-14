import React from "react";

const actionWrite = (event : any) => {
    console.log("Input type.....");
    console.log(event.target.value);
}

const TaskSearch = () : JSX.Element => {
    return (
        <input className='TodoSearch' type="text" placeholder="Search... " onChange={actionWrite}/>
    );
};

export {TaskSearch};