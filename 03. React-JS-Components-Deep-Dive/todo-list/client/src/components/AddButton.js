export default function AddButton(props) {
  const { addTodo } = props;
  return (
    <div className="add-btn-container">
      <button className="btn" onClick={addTodo}>+ Add new Todo</button>
    </div>
  );
}
