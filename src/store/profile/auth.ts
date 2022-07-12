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
    console.log('response')
    console.log(response)

    const { user, token } = response;
    console.log('user')
    console.log(user)
    console.log('token')
    console.log(token)
    localStorage.setItem('token', token);
    return user;
  } catch (error:any) {
    console.log('error')
    console.log(error)
    return //thunkAPI.rejectWithValue();
  }

});

// const addStatus = createAsyncThunk(
//   ActionType.ADD_STATUS,
//   async (request, { extra: { services } }) => {
//     const { result } = await services.auth.addStatus(request);
//     return request;
//   }
// );

// export const login = createAsyncThunk(
//   ActionType.LOG_IN,
//   async ({ username, password }:any, thunkAPI) => {
//     try {
//       const data = await AuthService.login(username, password);
//       return { user: data };
//     } catch (error:any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       //thunkAPI.dispatch(setMessage(message));
//       return //thunkAPI.rejectWithValue();
//     }
//   }
// );

// const initialState = {
//   user: null
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   extraReducers: {
//     [register.fulfilled]: (state, action) => {
//       state.isLoggedIn = true;
//     },
//     [register.rejected]: (state, action) => {
//       state.isLoggedIn = false;
//     },
//     [login.fulfilled]: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload.user;
//     },
//     [login.rejected]: (state, action) => {
//       state.isLoggedIn = false;
//       state.user = null;
//     },
//     // [logout.fulfilled]: (state, action) => {
//     //   state.isLoggedIn = false;
//     //   state.user = null;
//     // },
//   },
//   reducers: {}
// });
// const { reducer } = authSlice;
//export default reducer;
