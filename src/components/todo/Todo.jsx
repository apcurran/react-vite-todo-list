import "./Todo.css";

function Todo({ description }) {
    return (
        <li className="todo">
            <label>
                <input type="checkbox" />
                <p>{description}</p>
            </label>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
}

export default Todo;
