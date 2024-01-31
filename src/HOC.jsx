import React from "react";
import { Button, Container } from "react-bootstrap";
import TodoDetails from "./TodoDetails";
import TodosList from "./TodosList";
import GoBackText from "./GoBackText";
import { Header } from "./Header";

const withHeaderProps = (WrappedComponent) => {
  const EnhancedHeader = (props) => {
    const {
      handleShowModal,
      showModal,
      setShowModal,
      addTodoDispatch,
      addTodoState,
      todos,
      setTodos,
      removeTodo,
      handleEdit,
      resetReducer,
      handleTodosCheck,
    } = { ...props };

    return (
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
          {WrappedComponent === TodoDetails && (
            <>
              <Button size="lg" className="rounded-0 my-2">
                back
              </Button>
              <Button size="lg" className="rounded-0 my-2" id="edit">
                edit
              </Button>
              <Button size="lg" className="rounded-0 my-2" id="delete">
                delete
              </Button>
            </>
          )}
          {WrappedComponent === GoBackText && (
            <Button size="lg" className="rounded-0 my-2">
              back
            </Button>
          )}
          {WrappedComponent === TodosList && (
            <Button size="lg" className="rounded-0 my-2 mx-3">
              add todo
            </Button>
          )}
        </Header>
        <WrappedComponent
          todos={todos}
          handleTodosCheck={handleTodosCheck}
          removeTodo={removeTodo}
        />
      </Container>
    );
  };
  return EnhancedHeader;
};

export default withHeaderProps;
