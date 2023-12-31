import { useEffect, useReducer, useState } from "react";
import TodosList from "./TodosList";
import TodoDetails from "./TodoDetails";
import "./App.css";
import GoBackText from "./GoBackText";

import { Container, Button } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";

const initialAddTodoState = {
  date: null,
  priority: null,
  description: null,
  title: null,
};
const addTodoReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return initialAddTodoState;

    case "set_date":
      return { ...state, date: action.payload };
    case "set_priority":
      return { ...state, priority: action.payload };
    case "set_description":
      return { ...state, description: action.payload };
    case "set_title":
      return { ...state, title: action.payload };
    case "edit_todo":
      return {
        ...state,
        id: action.payload.id,
        title: action.payload.title,
        priority: action.payload.priority,
        description: action.payload.description,
        date: action.payload.date,
      };
    default:
      return state;
  }
};

export default function RouteComponent() {
  const [todos, setTodos] = useState(() => {
    const stateString = localStorage.getItem("todos");

    if (stateString) {
      return JSON.parse(stateString);
    } else {
      return [];
    }
  });

  useEffect(() => {
    window.addEventListener("beforeunload", function () {
      const stateString = JSON.stringify(todos);
      localStorage.setItem("todos", stateString);
    });
  }, [todos]);

  const handleTodosCheck = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const removeTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos
        .filter((todo) => todo.id !== todoId)
        .map((todo, index) => ({ ...todo, id: index }))
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [addTodoState, addTodoDispatch] = useReducer(
    addTodoReducer,
    initialAddTodoState
  );

  function handleEdit(todo) {
    addTodoDispatch({ type: "edit_todo", payload: todo });
  }

  function resetReducer() {
    addTodoDispatch({ type: "reset", payload: initialAddTodoState });
  }

  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <Container fluid className="p-0 gx-0">
              <Header
                handleShowModal={handleShowModal}
                showModal={showModal}
                setShowModal={setShowModal}
                addTodoDispatch={addTodoDispatch}
                addTodoState={addTodoState}
                todos={todos}
                setTodos={setTodos}
                resetReducer={resetReducer}
              >
                <Button size="lg" className="rounded-0 my-2 mx-3">
                  add todo
                </Button>
              </Header>
              <TodosList
                todos={todos}
                handleTodosCheck={handleTodosCheck}
                removeTodo={removeTodo}
              />
            </Container>
          }
        />

        <Route
          path="/todos/:todoId"
          element={
            <Container fluid className="p-0 gx-0">
              <Header
                handleShowModal={handleShowModal}
                showModal={showModal}
                setShowModal={setShowModal}
                addTodoDispatch={addTodoDispatch}
                addTodoState={addTodoState}
                todos={todos}
                setTodos={setTodos}
                removeTodo={removeTodo}
                handleEdit={handleEdit}
                resetReducer={resetReducer}
              >
                <>
                  <Button size="lg" className="rounded-0 my-2">
                    back
                  </Button>
                  <Button size="lg" className="rounded-0 my-2" id="edit">
                    edit
                  </Button>
                  <Button size="lg" className="rounded-0 my-2 " id="delete">
                    delete
                  </Button>
                </>
              </Header>
              <TodoDetails todos={todos} handleTodosCheck={handleTodosCheck} />
            </Container>
          }
        />

        <Route
          path="*"
          element={
            <Container fluid className="p-0 gx-0">
              <Header
                handleShowModal={handleShowModal}
                showModal={showModal}
                setShowModal={setShowModal}
                addTodoDispatch={addTodoDispatch}
                addTodoState={addTodoState}
                todos={todos}
                setTodos={setTodos}
                removeTodo={removeTodo}
                handleEdit={handleEdit}
                resetReducer={resetReducer}
              >
                <>
                  <Button size="lg" className="rounded-0 my-2">
                    back
                  </Button>
                </>
              </Header>
              <GoBackText />
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
