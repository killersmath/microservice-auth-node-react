import { useRecoilValue } from "recoil";
import { todoContentState } from "@presentation/atoms/todoState";

import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useRecoilValue(todoContentState);

  return (
    <div>
      {todos.map((todoProps) => (
        <TodoItem {...todoProps} key={todoProps.id} />
      ))}
    </div>
  );
};

export default TodoList;
