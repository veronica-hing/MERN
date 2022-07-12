import { TodoItem } from "../TodoItem/TodoItem";
export const TodoList = (props) => {
    const {todos} = props;
    return(
        <div>
            {todos.map((todo, i) =>{
                return <TodoItem key = {i} id = {i} todo = {todo.todo} completed = {todo.completed} handleDelete = {props.handleDelete} handleChecked = {props.handleChecked}/>
            })}
        </div>
    );
};