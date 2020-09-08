import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectToken } from '../user/authSlice';
import { loadTasks, selectTasks } from './taskSlice';

export default function TaskList() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useState(() => dispatch(loadTasks(token)));
  const tasks = useSelector(selectTasks);

  if (!token) {
    return <span>Please log in first!</span>;
  }
  
  return (
    <Fragment>
      <h1>My Tasks</h1>
      <ul>
        {tasks.map(task => <li key={task.id}>{task.name}</li>)}
      </ul>
    </Fragment>
  );
}
