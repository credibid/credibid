import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  token: undefined,
  email_address: undefined,
  role: undefined,
  status: undefined,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    userLoggedIn: (state, action) => {
      state.token = action.payload.accessToken;
      state.email_address = action.payload.email_address;
      state.role = action.payload.role;
      state.status = action.payload.status;
    },
    userLoggedOut: (state) => {
      state.token = undefined;
      state.email_address = undefined;
      state.role = undefined;
      state.status = undefined;
      Cookies.remove('auth');
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;
