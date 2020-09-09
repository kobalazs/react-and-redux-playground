import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectToken } from '../user/authSlice';
import { selectLoading, loadTasks, selectTasks, createTask, selectError } from './taskSlice';
import TaskDto from './TaskDto';

export default function TaskList() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useState(() => dispatch(loadTasks(token)));
  const tasks = useSelector(selectTasks);

  const addNewTask = () => {
    const task = new TaskDto({ name: 'New Task' });
    dispatch(createTask(token, task));
  };

  if (!token) {
    return <span>Please log in first!</span>;
  }
  
  return (
    <Fragment>
      <h1>My Tasks</h1>
      {error ? <div class="error">{error}</div> : null}
      <button onClick={addNewTask} disabled={loading}>Add New Task</button>
      {loading ? <div>Loading...</div> : null}
      <ul>
        {tasks.map(task => <li key={task.id}>{task.name}</li>)}
      </ul>
    </Fragment>
  );
}
