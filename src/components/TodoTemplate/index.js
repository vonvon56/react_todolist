import TodoHead from "../TodoHead";
import TodoList from "../TodoList";
import TodoCreate from "../TodoCreate";
import "./TodoTemplate.scss";

function TodoTemplate() {
  return (
    <div className="template-container">
      <TodoHead />
      <TodoList />
      <TodoCreate />
    </div>
  );
}

export default TodoTemplate;
