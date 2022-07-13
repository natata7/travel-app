import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";
import PostService from "../../services/post.service";
import { IBooking } from "../../interfaces/Booking.interface";

export interface ITrip {
  id: string;
  title: string;
  description: string;
  level: string;
  duration: number;
  price: number;
  image: string;
  createdAt: string;
}

export interface IQuery {
  tripId: string;
  userId: string;
  guests: number;
  date: string;
}

const loadTrips = createAsyncThunk(ActionType.ALL_TRIPS, async () => {
  const trips = await PostService.getAllTrips();
  return trips;
});

const loadTripById = createAsyncThunk(
  ActionType.SET_EXPANDED_TRIP,
  async (tripId: string) => {
    const trip = tripId ? await PostService.getTrip(tripId) : undefined;
    return trip;
  }
);

const setBooking = createAsyncThunk(ActionType.SET_BOOKING, async (query: IQuery) => {
  const booking = await PostService.setBooking(query);
  return booking;
});

const getBookings = createAsyncThunk(ActionType.GET_BOOKING, async (post) => {
  const bookings = await PostService.getBookings();
  return bookings;
});

const deleteBooking = createAsyncThunk(
  ActionType.DELETE_BOOKING,
  async (bookingId:string) => {
    const result = await PostService.deleteBooking(bookingId);
    if (result)
    
    return bookingId;
  }
);

export { loadTrips, loadTripById, setBooking, getBookings, deleteBooking };
