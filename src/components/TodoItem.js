import { ReactComponent as CloseIcon } from "../assets/close.svg";
import styled from "styled-components";

const StyledTodoItem = styled.li`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 10px;
  border: 1px solid lightgray;
  border-radius: 7px;
  list-style: none;
`;

const StyledCheckbox = styled.input`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const StyledText = styled.span`
  flex: 1 0 auto;
  font-weight: 400;
  font-size: 14px;
  color: grey;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  color: lightgray;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: grey;
  }
`;

export default function TodoItem({ todo, deleteTodo, toggleTodo }) {
  return (
    <StyledTodoItem>
      <StyledCheckbox
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <StyledText completed={todo.completed}>{todo.text}</StyledText>
      <StyledButton onClick={() => deleteTodo(todo.id)}>
        <CloseIcon width="20" height="20" />
      </StyledButton>
    </StyledTodoItem>
  );
}
