import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import {
  loadTrips,
  loadTripById,
  setBooking,
  getBookings,
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
  builder.addCase(loadTripById.fulfilled, (state, action) => {
    const trip = action.payload;

    state.expandedTrip = trip;
  });
  builder.addCase(getBookings.fulfilled, (state, action) => {
    const bookings = action.payload;

    state.bookings = bookings;
  });
  builder.addCase(setBooking.fulfilled, (state, action) => {
    const bookings = action.payload;

    state.bookings = bookings;
  });
  builder.addCase(deleteBooking.fulfilled, (state, action) => {
    const bookings = state.bookings;
    var filtered = bookings.filter(function (item) {
      return item.id !== action.payload;
    });

    state.bookings = filtered;
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
  //     isAnyOf(deleteBooking.fulfilled, createPost.fulfilled),
  //     (state, action) => {
  //       const { post } = action.payload;

  //       state.posts = [post, ...state.posts];
  //     }
  //   );
});

export { reducer };
