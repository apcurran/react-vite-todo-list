import "./Todo.css";

function Todo({ id, description, setMyTodos }) {
    function handleEdit(todoEditId) {
        
    }

    function handleDelete(todoDeleteId) {
        setMyTodos((previousTodos) => {
            return previousTodos.filter((currentTodo) => {
                return currentTodo.id !== todoDeleteId;
            });
        });
    }

    return (
        <li className="todo">
            <label>
                <input type="checkbox" />
                <p>{description}</p>
            </label>
            <button popovertarget="mypopover" onClick={() => handleEdit(id)}>Edit</button>
            <div popover="auto" id="mypopover">My Popover Content</div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    );
}

export default Todo;
