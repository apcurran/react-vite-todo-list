import "./Todo.css";

function Todo({ description }) {
    return (
        <li className="todo">{description}</li>
    );
}

export default Todo;
