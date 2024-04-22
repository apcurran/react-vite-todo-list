import Todo from "../todo/Todo";
import "./TodosList.css";

function TodosList({ myTodos }) {
    const todos = myTodos.map((todo) => <Todo key={todo.id} description={todo.description} />);

    return (
        <ul className="todos-list">
            {todos}
        </ul>
    );
}

export default TodosList;
