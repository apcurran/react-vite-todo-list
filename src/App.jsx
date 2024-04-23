import { useState } from "react";
import NewTodoForm from "./components/new-todo-form/NewTodoForm";
import TodosList from "./components/todos-list/TodosList";

function App() {
    const [myTodos, setMyTodos] = useState([]);

    return (
        <div className="wrapper">
            <NewTodoForm myTodos={myTodos} setMyTodos={setMyTodos} />
            <TodosList myTodos={myTodos} setMyTodos={setMyTodos} />
        </div>
    );
}

export default App;
