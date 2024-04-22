import "./Todo.css";

function Todo({ description }) {
    return (
        <li className="todo">
            <p>{description}</p>
        </li>
    );
}

export default Todo;
