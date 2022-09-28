import React from "react";

import AddTodo from "@presentation/containers/AddTodo";
import TodoList from "@presentation/containers/TodoList";

const Home: React.FC = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Home;
