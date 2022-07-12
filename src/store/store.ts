import { configureStore } from '@reduxjs/toolkit'
import { profileReducer } from './root-reducer';
import { tripsReducer } from './root-reducer';
import { useDispatch } from 'react-redux';
import { IUser } from './profile/auth';
import { ITrip } from '../interfaces/Trip.interface';

export interface IState {
  profile: {
    user: IUser
  }
  trips: {
    trips: ITrip[]
  };
}

const store = configureStore({
  reducer: {
    profile: profileReducer,
    trips: tripsReducer
  },
  devTools: true,
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
