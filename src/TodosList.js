import { Row, Col } from "react-bootstrap";

import { TodoListItem } from "./TodoListItem";

export default function TodosList({ todos, handleTodosCheck, removeTodo }) {
  return (
    <Row className="justify-content-center mx-0 pt-1 px-0 gx-0">
      <Col xs={12} md={10} lg={8}>
        {todos.length > 0 && (
          <ul className="list-unstyled">
            {todos.map((todo) => (
              <TodoListItem
                todo={todo}
                handleTodosCheck={handleTodosCheck}
                key={todo.id}
                removeTodo={removeTodo}
              />
            ))}
          </ul>
        )}
        {todos.length === 0 && (
          <h1 id="todos-empty-header">
            Ready to get things done? Start by creating your to-do list with our
            easy-to-use app. Let's make your day more organized!
          </h1>
        )}
      </Col>
    </Row>
  );
}
