import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./app.css";
import { useState } from "react";
import { Todo } from "./types/todos.types";
import { v4 as uuid } from "uuid";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (enteredText: string) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      {
        id: uuid(),
        text: enteredText,
      },
    ]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const todoResetHandler = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="formContainer">
        <NewTodo onAddTodo={todoAddHandler} />
        <button className="inputButtons inputButtons--destroy" type="reset" onClick={todoResetHandler}>
          Reset all
        </button>
      </div>
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
