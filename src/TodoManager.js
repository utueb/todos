import { Button, Modal } from "react-bootstrap";
import { TodoManagerForm } from "./TodoManagerForm";

function TodoManager({
  type,
  addTodoState,
  addTodoDispatch,
  todos,
  setTodos,
  setShowModal,
  resetReducer,
  todoId,
  showModal,
}) {
  const setDateAction = (date) =>
    addTodoDispatch({ type: "set_date", payload: date });
  const setPriorityAction = (priority) =>
    addTodoDispatch({ type: "set_priority", payload: priority });
  const setDescriptionAction = (description) =>
    addTodoDispatch({ type: "set_description", payload: description });
  const setTitleAction = (title) => {
    addTodoDispatch({ type: "set_title", payload: title });
  };

  const addTodoStateNotEmpty = () =>
    addTodoState.date !== null &&
    addTodoState.priority !== null &&
    addTodoState.description !== null &&
    addTodoState.description !== "" &&
    addTodoState.title !== null &&
    addTodoState.title !== "";

  const handleCloseModal = () => {
    setShowModal(false);
    resetReducer();
  };

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: todos.length,
        date: addTodoState.date,
        title: addTodoState.title,
        description: addTodoState.description,
        priority: addTodoState.priority,
        checked: false,
      },
    ]);
  }
  function editTodo() {
    setTodos(
      todos.map((todo) =>
        Number(todoId) === todo.id
          ? {
              ...todo,
              id: addTodoState.id,
              date: addTodoState.date,
              title: addTodoState.title,
              description: addTodoState.description,
              priority: addTodoState.priority,
            }
          : todo
      )
    );
  }

  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton className="add-todo-modal">
        <Modal.Title>{type === "add" ? " add todo" : "edit todo"}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="add-todo-modal">
        <TodoManagerForm
          state={addTodoState}
          setDateAction={setDateAction}
          setPriorityAction={setPriorityAction}
          setDescriptionAction={setDescriptionAction}
          setTitleAction={setTitleAction}
        />
      </Modal.Body>
      <Modal.Footer className="add-todo-modal">
        <Button
          variant="secondary"
          onClick={() => {
            if (!addTodoStateNotEmpty()) return;

            if (type === "add") {
              addTodo();
            }
            if (type === "edit") {
              editTodo();
            }
            handleCloseModal();
          }}
          className="rounded-0"
          disabled={!addTodoStateNotEmpty()}
        >
          {type}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export { TodoManager };
