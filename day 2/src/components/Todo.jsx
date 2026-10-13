import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTask() {
    setTodos([...todos, task]);
    setTask("");
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      {todos.map((todo, index) => (
        <p key={index}>{todo}</p>
      ))}
    </>
  );
}

export default Todo;