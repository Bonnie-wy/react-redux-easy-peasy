import React from "react";
import { useStoreState } from "easy-peasy";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useStoreState((state) => state.todos);

  return (
    <>
      <h1>Todos</h1>
      <p>Click todo item to complete</p>
      <hr />
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </>
  );
};

export default Todos;
