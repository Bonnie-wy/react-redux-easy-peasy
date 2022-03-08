import React from "react";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = [
    {
      id: 1,
      title: "Take out trash",
      completed: true,
    },
    {
      id: 2,
      title: "Pickup kids from school",
      completed: false,
    },
    {
      id: 3,
      title: "Dinner with boss",
      completed: false,
    },
  ];
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
