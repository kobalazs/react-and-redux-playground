import { createSlice } from '@reduxjs/toolkit';
import Axios from 'axios';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    user: null,
    token: null,
    error: null
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSessionData: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    unsetSessionData: state => {
      state.user = null;
      state.token = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  },
});

export const {
  setLoading,
  setSessionData,
  unsetSessionData,
  setError
} = authSlice.actions;

export const logIn = user => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await Axios.post(`${process.env.REACT_APP_API_ENDPOINT}/auth`, user);
    dispatch(setSessionData(response.data));
  } catch (e) {
    dispatch(setError(e.response?.data?.error));
  }
  dispatch(setLoading(false));
};

export const logOut = () => dispatch => {
  dispatch(unsetSessionData());
};

export const selectLoading = state => state.auth.loading;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectError = state => state.auth.error;

export default authSlice.reducer;
