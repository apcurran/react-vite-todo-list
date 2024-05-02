import { useState, useRef } from "react";
import "./Todo.css";

function Todo({ id, description, setMyTodos }) {
    const [todoDescriptionEdit, setTodoDescriptionEdit] = useState(description);
    const [isTodoCompleted, setIsTodoCompleted] = useState(false);
    const popoverDivRef = useRef(null);
    
    const todoParagraph = isTodoCompleted ? <p className="todo--completed">{description}</p> : <p>{description}</p>;

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

    function handleCheckAction(event) {
        setIsTodoCompleted(event.target.checked);
    }

    return (
        <li className="todo">
            <label>
                <input checked={isTodoCompleted} onChange={handleCheckAction} type="checkbox" />
                {todoParagraph}
            </label>
            <button popovertarget={`mypopover-todo-${id}`}>Edit</button>
            <div ref={popoverDivRef} className="popover" popover="auto" id={`mypopover-todo-${id}`}>
                <form onSubmit={(event) => handlePopoverEditSubmit(event, id)} className="popover-form" >
                    <input type="text" value={todoDescriptionEdit} onChange={(event) => setTodoDescriptionEdit(event.target.value)} />
                    <button type="submit">Update</button>
                </form>
            </div>
            <button onClick={() => handleDelete(id)}>Delete</button>
        </li>
    );
}

export default Todo;
