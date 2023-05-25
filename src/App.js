import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Drums class',
      day: 'Jun 12th at 2:00',
      reminder: false,
  },
  {
      id: 2,
      text: 'Cinema with friends',
      day: 'Jun 12th at 7:00',
      reminder: true,
  },
]);
  const [showForm, setShowForm] = useState(false);

  // toggling form
  const onAdd = () => {
    setShowForm(!showForm)
  }

  // update task after new addition
  const updateTasks = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
    
  }

  return (
    <div className="container">
      <Header onAdd={onAdd} showForm={showForm}  />
      {showForm && <AddTask updateTasks={updateTasks}/> }
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'}
    </div>
  );
}

export default App;



