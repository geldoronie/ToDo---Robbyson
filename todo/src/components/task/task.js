import React from 'react';
import '../task/task.css';

export default function Tasks({ tasks, removeTask }) {

    return (

        tasks.map((task, index) => {
            return (
                <div className="task">
                    <h3 className="task-h3">{task.description}</h3>
                    <span className="task-status">
                        <p>{task.duedate.substr(0, 10).split('-').reverse().join('/')}</p>
                        <button className="task-button-complete" onClick={() => { removeTask(task._id) }} />
                    </span>

                </div>
            )

        })

    );

}
