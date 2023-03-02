export default function Table(props) {
  const { todos, toggleTodoStatus } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
        {/*<!-- Todo item -->*/}
        {console.log(todos)}
        {todos.map((todo) => {
          return (
            <tr
              key={todo.id}
              className={todo.isCompleted ? "todo is-completed" : "todo"}
            >
              <td>{todo.text}</td>
              <td>{todo.isCompleted ? "Completed" : "Not completed"}</td>
              <td className="todo-action">
                <button
                  className="btn todo-btn"
                  onClick={() => toggleTodoStatus(todo.id)}
                >
                  Change status
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
