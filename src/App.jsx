import { useState, useEffect } from "react";
import NewTodoForm from "./components/new-todo-form/NewTodoForm";
import TodosList from "./components/todos-list/TodosList";

function App() {
    const [myTodos, setMyTodos] = useState(() => {
        return JSON.parse(localStorage.getItem("myTodos")) || [];
    });

    useEffect(() => {
        localStorage.setItem("myTodos", JSON.stringify(myTodos));
    }, [myTodos]);

    return (
        <div className="wrapper">
            <NewTodoForm myTodos={myTodos} setMyTodos={setMyTodos} />
            <TodosList myTodos={myTodos} setMyTodos={setMyTodos} />
        </div>
    );
}

export default App;
