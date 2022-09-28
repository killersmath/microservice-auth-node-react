import { useRecoilState, useSetRecoilState } from "recoil";
import { todoCompleteState, todoContentState, TodoContent } from "@presentation/atoms/todoState";

const TodoItem: React.FC<TodoContent> = ({ description, title, id }) => {
  const [isComplete, setIsComplete] = useRecoilState(todoCompleteState(id));
  const setTodos = useSetRecoilState(todoContentState);

  const toggleComplete = () => setIsComplete((prevState) => !prevState);
  const deleteTodo = () => setTodos((todos) => todos.filter((todo) => todo.id !== id));

  return (
    <div>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      <div>
        <button onClick={toggleComplete}>{isComplete ? "Not complete" : "Complete"}</button>
        <button onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
