import React from "react";
import styles from "./Form.module.css";

const Form = ({ setTasks, tasks }) => {
  const [task, setTask] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (task) {
      setTasks([
        ...tasks,
        {
          id: Math.random(10),
          title: task,
          completed: false,
        },
      ]);
      setTask("");
    } else {
      alert("Digite algo");
    }
  }

  return (
    <form className={`${styles.form} containerTask`} onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={({ target }) => setTask(target.value)}
        placeholder="Estudar, fazer compras, etc..."
      />
      <button className={`${styles.btn} btn`}>Adicionar</button>
    </form>
  );
};

export default Form;
