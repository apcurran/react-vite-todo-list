import { useState } from "react";

import "./NewTodoForm.css";

function NewTodoForm({ setMyTodos }) {
    const [newTodoDescription, setNewTodoDescription] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        // do not add blank todo to list
        if (newTodoDescription === "") return;

        setMyTodos((previousTodos) => {
            const todoObject = {
                id: crypto.randomUUID(),
                description: newTodoDescription
            };

            return [...previousTodos, todoObject];
        });
    }

    return (
        <form onSubmit={handleSubmit} className="todos-form-section">
            <label htmlFor="new-todo">New Todo</label>
            <input onChange={(event) => setNewTodoDescription(event.target.value)} type="text" name="new-todo" id="new-todo" />
            <button>Add Todo</button>
        </form>
    );
}

export default NewTodoForm;
