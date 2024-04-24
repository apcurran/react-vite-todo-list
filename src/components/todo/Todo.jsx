import { useState, useRef } from "react";
import "./Todo.css";

function Todo({ id, description, setMyTodos }) {
    const [todoDescriptionEdit, setTodoDescriptionEdit] = useState(description);
    const popoverDivRef = useRef(null);

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
        // close current popover form via ref
        popoverDivRef.current.hidePopover();
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
            <button popovertarget={`mypopover-todo-${id}`}>Edit</button>
            <div ref={popoverDivRef} className="popover" popover="auto" id={`mypopover-todo-${id}`}>
                <form onSubmit={(event) => handlePopoverEditSubmit(event, id)} className="popover-form" >
                    <input type="text" value={todoDescriptionEdit} onChange={(event) => setTodoDescriptionEdit(event.target.value)} />
                    <button>Update</button>
                </form>
            </div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    );
}

export default Todo;
