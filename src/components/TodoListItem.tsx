import { TrashIcon, CheckIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Todo } from "../types/todos.types";

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: string) => void;
}

const TodoListItem = ({ todo, onDeleteTodo }: TodoItemProps) => {
  const [taskIsDone, setTaskIsDone] = useState<boolean>(false);

  return (
    <li key={todo.id} className="todoList__bulletPoint">
      <span
        className={
          !taskIsDone
            ? "todoList__bulletPoint__content"
            : "todoList__bulletPoint__content--crossed"
        }
      >
        {todo.text}
      </span>
      <button
        type="button"
        onClick={() => onDeleteTodo(todo.id)}
        className="todoList__deleteButton"
      >
        <TrashIcon className="todoList__deleteIcon" />
      </button>
      <button
        type="button"
        onClick={() => setTaskIsDone(!taskIsDone)}
        className="todoList__deleteButton"
      >
        <CheckIcon className="todoList__checkIcon" />
      </button>
    </li>
  );
};

export default TodoListItem;
