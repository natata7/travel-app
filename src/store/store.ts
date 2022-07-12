import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './root-reducer';
import { useDispatch } from 'react-redux';
import { IUser } from './profile/auth';

export interface IState {
  profile: {
    user: IUser
  }
}

const store = configureStore({
  reducer: {
    profile: profileReducer
  },
  devTools: true,
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
