import { TodoItem } from "../TodoItem/TodoItem";
export const TodoList = (props) => {
    const {todos} = props;
    return(
        <div>
            {todos.map((todo, i) =>{
                return <TodoItem key = {i} todo = {todo.todo} completed = {todo.completed}/>
            })}
        </div>
    );
};