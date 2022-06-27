import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "First Meeting at School",
      day: "5-06-2022",
    },
    {
      id: 2,
      text: "Second Meeting at School",
      day: "10-06-2022",
    },
    {
      id: 3,
      text: "Third Meeting at School",
      day: "15-06-2022",
    },
  ]);
  const [title, setTitle] = useState(`You have ${tasks.length} to do.`);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setTitle(`You have ${tasks.length - 1} tasks`);
  };

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
    setTitle(`You have ${tasks.length + 1} tasks`);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} title={title} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No Tasks To Show"
      )}
      {showAddTask && <AddTask onAdd={addTask} />}
    </div>
  );
}

export default App;
