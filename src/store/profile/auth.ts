import { createAsyncThunk } from '@reduxjs/toolkit';
import { IResponse } from '../../interfaces/User.interface'
import AuthService from "../../services/auth.service";
import { ActionType } from './common';

export const register = createAsyncThunk(ActionType.REGISTER, async ({ fullName, email, password }:any, thunkAPI ) => {

  try {
    const response:IResponse = await AuthService.registration(fullName, email, password);

    const { user, token } = response;
    localStorage.setItem('token', token);

    return user;
  } catch (error:any) {

    return 
  }

});

export const login = createAsyncThunk(
  ActionType.LOG_IN,
  async ({ email, password }:any, thunkAPI) => {

    try {
      const response:IResponse = await AuthService.login(email, password);

      const { user, token } = response;
      localStorage.setItem('token', token);

      return user;
    } catch (error:any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      
      return message
    }
  }
);

export const logout = createAsyncThunk(ActionType.LOG_OUT, async (_request ) => {
  localStorage.removeItem('token');

  return null;
});
