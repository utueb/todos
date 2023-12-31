import { Row, Col, ButtonGroup } from "react-bootstrap";
import { TodoManager } from "./TodoManager";
import { useLocation, useParams } from "react-router-dom";
import "./header.css";
import { useNavigate } from "react-router-dom";

export function Header({
  handleShowModal,
  showModal,
  setShowModal,
  addTodoDispatch,
  addTodoState,
  todos,
  setTodos,
  children,
  removeTodo,
  handleEdit,
  resetReducer,
}) {
  const date = new Date().toLocaleString("en-us", {
    month: "short",
    day: "numeric",
  });
  const location = useLocation();
  const path = location.pathname;
  const { todoId } = useParams();
  const todoIdNumber = Number(todoId);
  const todo = todos[todoId];
  const navigate = useNavigate();

  function HandleButtons(e) {
    const btnType = e.target.innerText;
    btnType === "back" && navigate("/");
    btnType === "add todo" && handleShowModal();
    if (btnType === "edit") {
      handleEdit(todo);
      handleShowModal();
    }
    if (btnType === "delete") {
      navigate("/");
      removeTodo(todoIdNumber);
    }
  }

  let todoManagerType;
  if (path === "/") todoManagerType = "add";
  if (path.includes("/todos")) todoManagerType = "edit";

  return (
    <Row className="justify-content-center mx-0 mb-3 position-sticky top-0">
      <Col xs={12} md={10} lg={8}>
        <header
          className="d-flex flex-row justify-content-between align-items-center"
          id="header"
        >
          <h3 className="mb-0 ms-2 fw-bold">{date}</h3>

          <ButtonGroup onClick={HandleButtons}>{children}</ButtonGroup>
        </header>

        <TodoManager
          type={todoManagerType}
          showModal={showModal}
          setShowModal={setShowModal}
          addTodoDispatch={addTodoDispatch}
          addTodoState={addTodoState}
          todos={todos}
          todo={todo}
          setTodos={setTodos}
          resetReducer={resetReducer}
          todoId={todoId}
        />
      </Col>
    </Row>
  );
}
