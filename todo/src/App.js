
import './App.css';
import './components/task/task';
import Options from './components/options/options';
import Tasks from './components/task/task';
import React, { useState, useEffect } from 'react';
import API from './services/requests';



function App() {
  const api = new API();

  async function getData() {
    const response = await api.getAllTask();

    console.log(response);

    if (response.data) {
      let data = response.data;
      let filterTask = [];
      let filterComplete = [];
      let filterHide = [];

      data.map(item => {
        if (item.hide) {
          filterHide.push(item)
        }
        else if (item.done) {
          filterComplete.push(item);
        }
        else {
          filterTask.push(item);
        }
        return null
      })

      setArchiveTask(filterHide);
      setcompleteTasks(filterComplete);
      setTasks(filterTask);

    }
  }

  useEffect(() => {
    getData();
  }, []
  );

  const [tasks, setTasks] = useState([]);
  const [listTask, setListTask] = useState([]);
  const [completeTasks, setcompleteTasks] = useState([])
  const [archivedTask, setArchiveTask] = useState([])

  const addTask = (task) => {
    setTasks([...tasks, task])
    addTaskBD(task);
  }
  const changeCompleteTask = (completeTask) => {
    setcompleteTasks([...completeTasks, completeTask])
  }
  const changeFiledTask = (task) => {
    setArchiveTask([...archivedTask, task])
  }
  const changeListTask = (option) => {
    setListTask(option)
  }
  const archiveTask = (task) => {
    task.hide = true;
    changeFiledTask(task);
    updateTaskBD(task)
  };

  const changeTaskToComplete = (task) => {
    task.done = true;
    changeCompleteTask(task);
    updateTaskBD(task)
  };
  const deleteTask = (id) => {
    deleteTaskBD(id);

  }
  const deleteCompleteTask = (id) => {
    deleteTaskBD(id);
  }
  const deleteArquivedTask = (id) => {
    deleteTaskBD(id);
  }

  async function deleteTaskBD(id) {
    await api.deleteTask(id);
    getData();
  }

  async function addTaskBD(data) {
    await api.postTask(data);
    getData();
  }

  async function updateTaskBD(data) {
    await api.updateTask(data);
    getData();
  }


  return (
    <div className="App">

      <header className="App-header">

        <h2>
          Tarefas
        </h2>

        <Options addTask={addTask} changeListTask={changeListTask} />

        <Tasks tasks={tasks}
          api={api}
          listTask={listTask}
          completeTasks={completeTasks}
          archivedTasks={archivedTask}
          archiveTask={archiveTask}
          changeTaskToComplete={changeTaskToComplete}
          deleteArquivedTask={deleteArquivedTask}
          deleteCompleteTask={deleteCompleteTask}
          deleteTask={deleteTask}
        />

      </header>


    </div >
  );
}

export default App;
