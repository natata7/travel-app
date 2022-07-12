import { createAsyncThunk } from '@reduxjs/toolkit';
//import { registration, signin } from '../../services/auth.service'
import AuthService from "../../services/auth.service";

//import { HttpError } from 'exceptions/exceptions';
//import { HttpCode, StorageKey, ExceptionMessage } from 'common/enums/enums';

import { ActionType } from './common';

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

export interface IResponse {
  token: string;
  user: IUser;
}

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
