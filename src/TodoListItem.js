import { Button, Form } from "react-bootstrap";
import { PriorityIndicator } from "./PriorityIndicator";
import "./todo-heading.css";
import { Link } from "react-router-dom";
export function TodoListItem({ todo, handleTodosCheck, removeTodo }) {
  function handleClick() {
    removeTodo(todo.id);
  }

  return (
    <li
      data-id={todo.id}
      className="d-flex flex-row align-items-center mb-3 todo-list pt-2 pb-3 todo-heading"
    >
      <PriorityIndicator priority={todo.priority} />
      <Form.Check
        inline
        label=""
        checked={todo.checked}
        onChange={() => handleTodosCheck(todo.id)}
        type={"checkbox"}
        name="todo-check"
        className="align-items-center d-flex m-0"
        id={`todo-list-item-${todo.id}`}
      />

      <Link
        to={`/todos/${todo.id}`}
        className="text-decoration-none w-100 overflow-hidden"
      >
        <h3 className={`fw-bold m-0 ${todo.checked && "todo-linethrough"}`}>
          {todo.title}
        </h3>
      </Link>
      <Button
        variant="danger"
        size="lg"
        className="rounded-0 ms-auto me-2"
        onClick={handleClick}
      >
        X
      </Button>
    </li>
  );
}
