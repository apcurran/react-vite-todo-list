import "./NewTodoForm.css";

function NewTodoForm() {
    return (
        <section className="todos-form-section">
            <label htmlFor="new-todo">New Todo</label>
            <input type="text" name="new-todo" id="new-todo" />
            <button>Add Todo</button>
        </section>
    );
}

export default NewTodoForm;
