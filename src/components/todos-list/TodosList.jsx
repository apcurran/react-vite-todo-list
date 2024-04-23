import Todo from "../todo/Todo";
import "./TodosList.css";

function TodosList({ myTodos, setMyTodos }) {
    const todos = myTodos.map((todo) => <Todo key={todo.id} id={todo.id} description={todo.description} setMyTodos={setMyTodos} />);

    return (
        <ul className="todos-list">
            {todos}
        </ul>
    );
}

export default TodosList;
