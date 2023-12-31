import { Form, FloatingLabel } from "react-bootstrap";
import Calendar from "react-calendar";

export function TodoManagerForm({
  state,
  setDateAction,
  setPriorityAction,
  setDescriptionAction,
  setTitleAction,
}) {
  return (
    <>
      <FloatingLabel
        controlId="titleInput"
        label="add title (max: 40 characters)"
        className="mb-3"
      >
        <Form.Control
          type="text"
          placeholder="add title"
          maxLength="40"
          value={state.title === null ? "" : state.title}
          onInput={(e) => setTitleAction(e.target.value)}
        />
      </FloatingLabel>
      <FloatingLabel
        controlId="descriptionInput"
        label="description (max: 240 characters)"
        className="mb-3"
      >
        <Form.Control
          as="textarea"
          placeholder="description"
          maxLength="240"
          value={state.description === null ? "" : state.description}
          onInput={(e) => setDescriptionAction(e.target.value)}
        />
      </FloatingLabel>
      <Form.Label>
        select priority ({state.priority ? state.priority : "not selected"})
      </Form.Label>
      <Form.Range
        min={1}
        max={3}
        onChange={(e) => setPriorityAction(e.target.value)}
        value={state.priority === null ? 1 : state.priority}
        className="mb-3"
      />
      <h3 className="text-center">add a due date</h3>
      <Calendar
        minDate={new Date()}
        onChange={(e) => {
          setDateAction(e);
        }}
        value={state.date === null ? "" : state.date}
        className="mx-auto"
      />
    </>
  );
}
