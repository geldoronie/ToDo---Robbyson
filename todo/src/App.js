
import './App.css';
import './components/task/task';
import Options from './components/options/options';
import Tasks from './components/task/task';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    {
      _id: "1",
      description: 'Modelar Arquitetura de Software',
      duedate: "isodate",
      done: false,
      hide: false
    },
    {
      _id: "2",
      description: 'Vejamos então outro exemplo',
      duedate: "isodate",
      done: false,
      hide: false
    }
  ])
  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const removeTask = (id) => {
    const filteredTasks = tasks.filter(todos => todos._id !== id);
    setTasks(filteredTasks);
  };

  const [completeTasks, setcompleteTasks] = useState([])
  const completeTask = (completeTask) => {
    setcompleteTasks([...completeTasks, completeTask])
  }


  return (
    <div className="App">

      <header className="App-header">

        <h2>
          Tarefas
        </h2>


      <Options addTask={addTask} />
      
      <Tasks tasks={tasks} removeTask={removeTask} />

      </header>


    </div >
  );
}

export default App;
