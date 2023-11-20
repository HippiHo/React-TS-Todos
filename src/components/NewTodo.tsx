import { useRef } from "react";
import "./newTodo.css";

interface NewTodoProps {
  onAddTodo: (todoText: string) => void;
}

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null);
  const addTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    onAddTodo(enteredText)
    textInputRef.current!.value = ''
  };

  return (
    <form className="newTodo" onSubmit={addTodoHandler}>
      <div className="newTodo__input">
        <label htmlFor="todo-text">New Todo: </label>
        <input
          type="text"
          id="todo-text"
          ref={textInputRef}
        />
      </div>
      <button className="inputButtons inputButtons--add" type="submit">Add</button>
    </form>
  );
};

export default NewTodo;
