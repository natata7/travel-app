import { createAsyncThunk } from '@reduxjs/toolkit';
import { IResponse } from '../../interfaces/User.interface'
import AuthService from "../../services/auth.service";
import { ActionType } from './common';

export const register = createAsyncThunk(ActionType.REGISTER, async ({ fullName, email, password }:any, thunkAPI ) => {
    const response:IResponse = await AuthService.registration(fullName, email, password);

    const { user, token } = response;
    localStorage.setItem('token', token);

    return user;
});

export const login = createAsyncThunk(
  ActionType.LOG_IN,
  async ({ email, password }:any, thunkAPI) => {
      const response:IResponse = await AuthService.login(email, password);
      
      const { user, token } = response;
      localStorage.setItem('token', token);

      return user;
  }
);

export const logout = createAsyncThunk(ActionType.LOG_OUT, async () => {
  localStorage.removeItem('token');
  return true;
});
