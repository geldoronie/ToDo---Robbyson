import React from 'react';
import '../task/task.css';
import DialogDelete from '../dialog/dialogDelete'
import { useState } from 'react';
import isEmpty from 'lodash/isEmpty';
import DialogEdit from '../dialog/dialogEdit';

export default function Tasks({
    tasks,
    listTask,
    addTask,
    completeTasks,
    archivedTasks,
    archiveTask,
    changeTaskToComplete,
    deleteArquivedTask,
    deleteCompleteTask,
    deleteTask }) {


    const [addOpen, setAddOpen] = useState(false);
    const [taskDescriptionEdit, setTaskDescription] = useState("");
    const [dataValue, setDataValue] = useState("");
    const [idListItem, setidListItem] = useState("");
    const [data, setData] = useState({});
    const changeValue = (value) => {
        setDataValue(value);
    };

    const onChangetaskDescription = (value) => {
        setTaskDescription(value);

    }

    const addClickOpen = () => {
        setAddOpen(true);
    };

    const addClose = () => {
        setAddOpen(false);
    };




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
                    <div className="task" key={index}>
                        <h3 className="task-h3">{completeTask.description}</h3>
                        <span className="task-status">
                            <p>{completeTask.duedate.substr(0, 10).split('-').reverse().join('/')}</p>
                            <button className="task-button-complete" onClick={() => { archiveTask(completeTask) }} />
                            <button className="task-button-delete" onClick={() => {
                                setidListItem(completeTasks[index]._id);
                                openConfirmeDelete();
                            }} />
                            <DialogDelete open={confirmeDelete}
                                closeConfirmeDelete={closeConfirmeDelete}
                                id={idListItem}
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
                    <div className="task" key={index}>
                        <h3 className="task-h3">{archive.description}</h3>
                        <span className="task-status">
                            <p>{archive.duedate.substr(0, 10).split('-').reverse().join('/')}</p>
                            <button className="task-button-delete" onClick={() => {
                                setidListItem(archivedTasks[index]._id);
                                openConfirmeDelete();
                            }} />
                            <DialogDelete open={confirmeDelete}
                                closeConfirmeDelete={closeConfirmeDelete}
                                id={idListItem}
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
                    <div className="task" key={index}>
                        <h3 className="task-h3">{task.description}</h3>
                        <span className="task-status">
                            <p>{task.duedate.substr(0, 10).split('-').reverse().join('/')}</p>
                            <button className="task-button-complete" onClick={() => { changeTaskToComplete(task) }} />
                            <button className="task-button-delete" onClick={() => {
                                setidListItem(tasks[index]._id);
                                openConfirmeDelete();
                            }} />
                            <button className="task-button-edit" onClick={() => {
                                setTaskDescription(tasks[index].description);
                                setData(tasks[index]);
                                addClickOpen()

                            }} />

                            <DialogEdit
                                addOpen={addOpen}
                                addTask={addTask}
                                data={data}
                                addClose={addClose}
                                taskDescriptionEdit={taskDescriptionEdit}
                                onChangetaskDescription={onChangetaskDescription}
                                dataValue={dataValue}
                                changeValue={changeValue}

                            />

                            <DialogDelete open={confirmeDelete}
                                closeConfirmeDelete={closeConfirmeDelete}
                                id={idListItem}
                                deleteFunction={deleteTask} />
                        </span>

                    </div>
                )

            })

        );
    }

}
