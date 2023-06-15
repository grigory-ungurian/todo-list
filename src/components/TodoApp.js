import { useState } from "react";

import styled from "styled-components";

import { ReactComponent as PencelIcon } from "../assets/pencel.svg";

import TodoFilter from "./TodoFilter";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const StyledTodoApp = styled.div`
  padding: 25px 20px;
  width: 300px;
  max-height: 100%;
  background-color: white;
  border-radius: 20px;
  color: rgb(37, 37, 66);
`;

const StyledTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 20px;
  text-align: center;
  color: rgb(36, 35, 65);
`;

const StyledSubmit = styled.button`
  padding: 10px 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  background-color: rgb(67, 135, 233);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgb(67, 145, 233);
  }
`;

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [activeFilter, setActiveFilter] = useState("Все");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTodo();
    }
  };

  const addTodo = () => {
    if (newTask.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setNewTask("");
    }
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (activeFilter === "Завершеные") {
      return todo.completed;
    } else if (activeFilter === "Незавершеные") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <StyledTodoApp>
      <StyledTitle>
        Задачи на день <PencelIcon width="20" height="20" />
      </StyledTitle>
      <TodoForm
        addTodo={addTodo}
        newTask={newTask}
        setNewTask={setNewTask}
        handleKeyDown={handleKeyDown}
      />
      <TodoFilter
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
      <StyledSubmit onClick={addTodo}>Создать задачу</StyledSubmit>
    </StyledTodoApp>
  );
}
