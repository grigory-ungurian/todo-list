import TodoItem from "./TodoItem";

import styled from "styled-components";

const StyledTodoList = styled.ul`
  height: 146px;
  margin-bottom: 15px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: ${({ empty }) => (!empty ? "center" : "stretch")};
  justify-content: ${({ empty }) => (!empty ? "center" : "flex-start")};
  row-gap: 10px;
`;

const StyledTodoEmpty = styled.li`
  list-style: none;
  color: lightgray;
`;

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <StyledTodoList empty={todos.length}>
      {todos.length === 0 && (
        <StyledTodoEmpty>Список задач пуст</StyledTodoEmpty>
      )}
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </StyledTodoList>
  );
}
