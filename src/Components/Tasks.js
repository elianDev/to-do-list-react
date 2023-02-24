import React from "react";
import styles from "./Tasks.module.css";

const Tasks = ({ setTasks, tasks }) => {
  function handleClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function handleChecked(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div>
      {tasks.map((task) => {
        return (
          <div className={`${styles.task} containerTask`} key={task.id}>
            <div
              className={styles.taskTitle}
              onClick={() => handleChecked(task.id)}
            >
              <h2
                style={
                  task.completed
                    ? { textDecoration: "line-through", fontStyle: "italic" }
                    : {}
                }
              >
                {task.title}
              </h2>
            </div>
            <button
              className={`${styles.btn} btn`}
              onClick={() => handleClick(task.id)}
            >
              Remover
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
