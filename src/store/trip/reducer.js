import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import {
  loadTrips,
  toggleExpandedTrip,
  setBooking,
  getBooking,
  deleteBooking,
} from "./actions";

const initialState = {
  trips: [],
  expandedTrip: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadTrips.fulfilled, (state, action) => {
    const trips = action.payload;

    state.trips = trips;
  });
  builder.addCase(toggleExpandedTrip.fulfilled, (state, action) => {
    const { trip } = action.payload;

    state.expandedTrip = trip;
  });
//   builder.addMatcher(
//     isAnyOf(setBooking.fulfilled, addComment.fulfilled),
//     (state, action) => {
//       const { posts, expandedPost } = action.payload;
//       state.posts = posts;
//       state.expandedPost = expandedPost;
//     }
//   );
//   builder.addMatcher(
//     isAnyOf(getBooking.fulfilled, createPost.fulfilled),
//     (state, action) => {
//       const { post } = action.payload;

//       state.posts = [post, ...state.posts];
//     }
//   );
//   builder.addMatcher(
//     isAnyOf(deleteBooking.fulfilled, createPost.fulfilled),
//     (state, action) => {
//       const { post } = action.payload;

//       state.posts = [post, ...state.posts];
//     }
//   );
});

export { reducer };
