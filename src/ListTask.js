// ListTask.js
import React from 'react';
import Task from './Task';

const ListTask = ({ tasks, filter, onToggleDone, onEdit, onFilterChange }) => {
  return (
    <div>
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="notDone">Not Done</option>
      </select>
      {tasks
        .filter((task) => {
          if (filter === 'all') return true;
          if (filter === 'done') return task.isDone;
          if (filter === 'notDone') return !task.isDone;
          return true;
        })
        .map((task) => (
          <Task
            key={task.id}
            task={task}
            onToggleDone={onToggleDone}
            onEdit={onEdit}
          />
        ))}
    </div>
  );
};

export default ListTask;
