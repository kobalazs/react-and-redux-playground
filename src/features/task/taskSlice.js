import { createSlice } from '@reduxjs/toolkit';

import HttpHelper from '../common/HttpHelper';

export const taskSlice = createSlice({
  name: 'task',
  initialState: {
    loading: false,
    tasks: []
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const {
  setLoading,
  setTasks,
  setError
} = taskSlice.actions;

export const loadTasks = token => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await HttpHelper(token).get('/task')
    dispatch(setTasks(response.data));
  } catch (e) {
    dispatch(setError(e.response?.data?.error));
  }
  dispatch(setLoading(false));
};

export const selectLoading = state => state.task.loading;
export const selectTasks = state => state.task.tasks;
export const selectError = state => state.task.error;

export default taskSlice.reducer;
