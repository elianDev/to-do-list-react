import React from "react";
import "./App.css";
import Form from "./Components/Form";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: "Estudar programação",
      completed: false,
    },
    {
      id: 2,
      title: "Ler livro",
      completed: true,
    },
  ]);

  return (
    <div className="container">
      <h1 className="title">To-Do List React</h1>
      <Form setTasks={setTasks} tasks={tasks} />
      <Tasks setTasks={setTasks} tasks={tasks} />
    </div>
  );
}

export default App;
