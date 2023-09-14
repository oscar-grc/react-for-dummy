import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faXmark} from '@fortawesome/free-solid-svg-icons';

import React from "react";

type Props = {
    text: string,
    completed: boolean
}

const TaskItem = ({text, completed}: Props) : JSX.Element => {
    return (
        <li className='TodoItem'>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            <span className={`Icon Icon-check ${ completed && "Icon-check--active"}`}><FontAwesomeIcon icon={faCheck as IconProp} /></span>
            <span className='Icon Icon-delete'><FontAwesomeIcon icon={faXmark as IconProp} /></span>
        </li>
    );
};

export {TaskItem};