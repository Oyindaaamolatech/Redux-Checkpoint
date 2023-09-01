// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// App.js
import React, { useState } from 'react';
import Addtask from './Addtask';
import ListTask from './ListTask';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Add a new task
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  // Toggle task's isDone status
  const toggleDone = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, isDone: !task.isDone } : task
    );
    setTasks(updatedTasks);
  };

  // Edit task description
  const editTask = (taskId, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <Addtask onAddtask={addTask} />
      <ListTask
        tasks={tasks}
        filter={filter}
        onToggleDone={toggleDone}
        onEdit={editTask}
        onFilterChange={(newFilter) => setFilter(newFilter)}
      />
    </div>
  );
};

export default App;
