import { Todo } from "../types/todos.types";
import TodoListItem from "./TodoListItem";
import "./todoList.css";

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {
  return (
    <ol className="todoList" style={{ 
      backgroundImage: `url("https://images.pexels.com/photos/3255761/pexels-photo-3255761.jpeg")` 
    }}>
      {todos.length > 0 &&
        todos.map((todo) => (
          <TodoListItem todo={todo} onDeleteTodo={onDeleteTodo} />
        ))}
    </ol>
  );
};

export default TodoList;
