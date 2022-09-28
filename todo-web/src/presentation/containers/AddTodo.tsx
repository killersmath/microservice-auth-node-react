import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { useSetRecoilState } from "recoil";
import { nanoid } from "nanoid";

import { todoContentState, TodoContent } from "@presentation/atoms/todoState";

const AddTodo: React.FC = () => {
  const setTodos = useSetRecoilState(todoContentState);
  const [content, setContent] = useState<Omit<TodoContent, "id">>({ description: "", title: "" });

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => setContent((prev) => ({ ...prev, [e.target.id]: e.target.value }));

  const addTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setTodos((todos) => [...todos, { ...content, id: nanoid() }]);
  };
  return (
    <form onSubmit={addTodo}>
      <input onChange={handleChange} value={content.title} id="title" required />
      <input onChange={handleChange} value={content.description} id="description" />
      <button type="submit" disabled={!content.title}>
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
