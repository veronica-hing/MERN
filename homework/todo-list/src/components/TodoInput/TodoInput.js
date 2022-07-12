import React, {useState} from 'react';

export const TodoInput = (props) => {
    const [ todo, setTodo] = useState("");
    //const [ completed, setCompleted] = useState(false);

    const createTodo = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        setTodo("");
    };

    return(
        <div>
            <form onSubmit = {createTodo}>
                <label>New Todo:</label>
                <input type = "text" onChange = {(e) => setTodo(e.target.value)} value = {todo}></input>
                <button type = "submit" >Add Todo</button>
            </form>
        </div>
    );
};
