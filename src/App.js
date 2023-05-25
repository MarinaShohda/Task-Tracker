import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";


function App() {
  const [tasks, setTasks] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    return JSON.parse(localValue)
  })


  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(tasks))
  }, [tasks])


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
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      {/* {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No tasks to show'} */}
    </div>
  );
}

export default App;



