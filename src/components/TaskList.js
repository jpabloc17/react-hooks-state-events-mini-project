import React from "react";
import Task from "./Task";
import { v4 as uuid } from "uuid";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return (
          <Task
            key={uuid()}
            text={task.text}
            category={task.category}
            onDelete={() => handleDelete(index)}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
