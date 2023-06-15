import styled from "styled-components";
import TodoApp from "./components/TodoApp";

const AppWrapper = styled.div`
  padding: 30px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(180, 209, 246);
  color: white;
`;

export default function App() {
  return (
    <AppWrapper>
      <TodoApp />
    </AppWrapper>
  );
}
