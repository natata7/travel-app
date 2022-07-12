import { createReducer, isAnyOf } from '@reduxjs/toolkit';
import { register, login, logout } from './auth';

const initialState = {
  user: null
};

const reducer = createReducer(initialState, builder => {
  builder
    .addMatcher(
      isAnyOf(
        login.fulfilled,
        logout.fulfilled,
        register.fulfilled,
      ),
      (state, action) => {
        state.user = action.payload;
      }
    )
    .addMatcher(
      isAnyOf(
        login.rejected,
        logout.rejected,
        register.rejected,
      ),
      state => {
        state.user = null;
      }
    )
});

export { reducer };