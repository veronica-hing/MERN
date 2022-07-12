import React, {useState} from 'react';

export const TodoItem = (props) => {
    return(
        <div>
            <h2>{props.todo}</h2>
            <h3>Completed: {props.completed.toString()}</h3>
        </div>
    );
};
