import "./Todo.css";

function Todo({ id, description, setMyTodos }) {
    function handleEdit(event) {
        console.log(event);
    }

    function handleDelete(todoDeleteId) {
        setMyTodos((previousTodos) => {
            return previousTodos.filter((todo) => {
                return todo.id !== todoDeleteId;
            });
        });
    }

    return (
        <li className="todo">
            <label>
                <input type="checkbox" />
                <p>{description}</p>
            </label>
            <button onClick={(event) => handleEdit(event)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    );
}

export default Todo;
