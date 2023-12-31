import { Navigate, useParams } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./todo-heading.css";
import "./todo-details.css";
import { PriorityIndicator } from "./PriorityIndicator";
export default function TodoDetails({ todos, handleTodosCheck }) {
  const { todoId } = useParams();
  const todoIdNumber = Number(todoId);
  const todo = todos[todoIdNumber];

  if (todo === undefined) return <Navigate to="error" />;
  const date = new Date(todo.date);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are zero-based
  const year = date.getUTCFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <Container fluid>
      <Row className="justify-content-center mb-2">
        <Col xs={12} md={10} lg={8}>
          <header
            className="flex-row d-flex align-items-center py-2 todo-heading mb-2  position-relative pb-5"
            id="todo-details-header"
          >
            <PriorityIndicator priority={todo.priority} />

            <Form.Check
              inline
              label=""
              checked={todo.checked}
              onChange={() => handleTodosCheck(todo.id)}
              type={"checkbox"}
              name="todo-check"
              className="align-items-center d-flex m-0 ms-2"
              id={`todo-list-item-${todo.id}`}
            />

            <h3
              className={`fw-bold m-0 text-wrap text-break ${
                todo.checked && "todo-linethrough"
              }`}
            >
              {todo.title}
            </h3>

            <i className="fw-bold position-absolute bottom-0 ms-3 mb-2">
              due: {formattedDate}
            </i>
          </header>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={10} lg={8}>
          <main className="px-2" id="todo-description">
            <p lang="en">{todo.description}</p>
          </main>
        </Col>
      </Row>
    </Container>
  );
}
