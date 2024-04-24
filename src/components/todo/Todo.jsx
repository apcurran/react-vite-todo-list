import { useState } from "react";
import "./Todo.css";

function Todo({ id, description, setMyTodos }) {
    const [todoDescriptionEdit, setTodoDescriptionEdit] = useState(description);

    function handlePopoverEditSubmit(event, todoEditId) {
        event.preventDefault();

        setMyTodos((previousTodos) => {
            return previousTodos.map((currentTodo) => {
                if (currentTodo.id === todoEditId) {
                    // update this particular todo to reflect updated description
                    const updatedCurrentTodoObject = {
                        ...currentTodo,
                        description: todoDescriptionEdit
                    };

                    return updatedCurrentTodoObject;
                } else {
                    return currentTodo;
                }
            });
        });
        // close current popover form
        event.target.hidePopover();
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
            <button popovertarget="mypopover">Edit</button>
            {/* TODO: create a form with input and update button for todo description popover */}
            <form onSubmit={(event) => handlePopoverEditSubmit(event, id)} className="popover-form" popover="auto" id="mypopover">
                <input type="text" value={todoDescriptionEdit} onChange={(event) => setTodoDescriptionEdit(event.target.value)} />
                <button>Update</button>
            </form>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    );
}

export default Todo;
