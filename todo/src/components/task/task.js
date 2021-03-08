import React from 'react';
import '../task/task.css';
import DialogDelete from '../dialog/dialogDelete'
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';

export default function Tasks({
    tasks,
    listTask,
    completeTasks,
    archivedTasks,
    archiveTask,
    changeTaskToComplete,
    deleteArquivedTask,
    deleteCompleteTask,
    deleteTask }) {

    const [confirmeDelete, setconfirmeDelete] = useState(false);

    const closeConfirmeDelete = () => {
        setconfirmeDelete(false);
    }
    const openConfirmeDelete = () => {
        setconfirmeDelete(true);
    }

    if (listTask === "Complete") {
        if (isEmpty(completeTasks)) {
            return (<div></div>)
        }
        return (

            completeTasks.map((completeTask, index) => {
                return (
                    <div className="task">
                        <h3 className="task-h3">{completeTask.description}</h3>
                        <span className="task-status">
                            <p>{completeTask.duedate.substr(0, 10).split('-').reverse().join('/')}</p>
                            <button className="task-button-complete" onClick={() => { archiveTask(completeTask._id) }} />
                            <button className="task-button-delete" onClick={() => {
                                openConfirmeDelete();
                            }} />
                            <DialogDelete open={confirmeDelete}
                                closeConfirmeDelete={closeConfirmeDelete}
                                id={completeTask._id}
                                deleteFunction={deleteCompleteTask} />
                        </span>

                    </div>
                )

            })

        );

    }
    else if (listTask === "Filed") {
        if (isEmpty(archivedTasks)) {
            return (<div></div>)
        }
        return (

            archivedTasks.map((archive, index) => {
                return (
                    <div className="task">
                        <h3 className="task-h3">{archive.description}</h3>
                        <span className="task-status">
                            <p>{archive.duedate.substr(0, 10).split('-').reverse().join('/')}</p>
                            <button className="task-button-delete" onClick={() => {
                                openConfirmeDelete();
                            }} />
                            <DialogDelete open={confirmeDelete}
                                closeConfirmeDelete={closeConfirmeDelete}
                                id={archive._id}
                                deleteFunction={deleteArquivedTask} />
                        </span>

                    </div>
                )

            })

        );
    }
    else {
        if (isEmpty(tasks)) {
            return (<div></div>)
        }
        return (
            tasks.map((task, index) => {
                return (
                    <div className="task">
                        <h3 className="task-h3">{task.description}</h3>
                        <span className="task-status">
                            <p>{task.duedate.substr(0, 10).split('-').reverse().join('/')}</p>
                            <button className="task-button-complete" onClick={() => { changeTaskToComplete(task._id) }} />
                            <button className="task-button-delete" onClick={() => {
                                openConfirmeDelete();
                            }} />
                            <DialogDelete open={confirmeDelete}
                                closeConfirmeDelete={closeConfirmeDelete}
                                id={task._id}
                                deleteFunction={deleteTask} />
                        </span>

                    </div>
                )

            })

        );
    }

}
