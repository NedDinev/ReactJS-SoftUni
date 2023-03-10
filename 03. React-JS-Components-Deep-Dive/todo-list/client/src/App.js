import AddButton from "./components/AddButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Table from "./components/Table";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      const URL = "http://localhost:3030/jsonstore/todos";

      try {
        fetch(URL)
          .then((res) => res.json())
          .then((data) => {
            const result = Object.keys(data).map((id) => ({ id, ...data[id] }));
            setTodos(result);
          });
      } catch (error) {
        console.log(error);
      }
    }
    fetchTodos();
  }, []);

  const addTodo = () => {
    const lastId = Number(todos[todos.length - 1].id);
    const text = prompt("Add new task:");
    const newTask = { _id: lastId + 1, text, isCompleted: false };
    setTodos((state) => [newTask, ...state]);
  };

  const toggleTodoStatus = (id) => {
    setTodos((state) =>
      state.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  if (!todos.length) return <Loading />;

  return (
    <div>
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <AddButton addTodo={addTodo} />

          <div className="table-wrapper">
            <Table todos={todos} toggleTodoStatus={toggleTodoStatus} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
