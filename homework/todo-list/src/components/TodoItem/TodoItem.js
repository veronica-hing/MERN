
export const TodoItem = (props) => {
    let styles;
    props.completed ? styles = "strike-through" : styles = "";
    return(
        <div>
            <p className={styles}>
                <input type = "checkbox" checked = {props.completed} onChange = {()=> {props.handleChecked(props.id)}}></input>
                {props.todo}
                <button onClick = {() => {props.handleDelete(props.id)}}>Delete</button>
            </p>
        </div>
    );
};
