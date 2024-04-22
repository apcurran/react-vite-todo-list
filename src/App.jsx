import { useState } from "react";
import NewTodoForm from "./components/new-todo-form/NewTodoForm";
import TodosList from "./components/todos-list/TodosList";

function App() {
    const [myTodos, setMyTodos] = useState([
        {
            id: 1,
            description: "Walk the dog."
        },
        {
            id: 2,
            description: "Do the dishes."
        }
    ]);

    return (
        <div className="wrapper">
            <NewTodoForm myTodos={myTodos} />
            <TodosList myTodos={myTodos} />
        </div>
    );
}

export default App;
