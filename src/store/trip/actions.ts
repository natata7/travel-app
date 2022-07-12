import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";
import PostService from "../../services/post.service";

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

const loadTrips = createAsyncThunk(ActionType.ALL_TRIPS, async () => {
  const trips = await PostService.getAllTrips();

  console.log('trips')
  console.log(trips)

  return trips;
});

const loadTripById = createAsyncThunk(
  ActionType.SET_EXPANDED_TRIP,
  async (tripId: string) => {
    const trip = tripId ? await PostService.getTrip(tripId) : undefined;
    return trip;
  }
);

const setBooking = createAsyncThunk(ActionType.SET_BOKING, async (postId) => {
  //const post = await services.post.getPost(postId);
  //return { post };
});

const getBooking = createAsyncThunk(ActionType.GET_BOKING, async (post) => {
  //const { id } = await services.post.addPost(post);
  //const newPost = await services.post.getPost(id);
  //return { post: newPost };
});

const deleteBooking = createAsyncThunk(
  ActionType.DELETE_BOKING,
  async (postId) => {
    // const { id } = await services.post.likePost(postId);
    // const diff = id ? 1 : -1; // if ID exists then the post was liked, otherwise - like was removed
    // const mapLikes = (post) => ({
    //   ...post,
    //   likeCount: Number(post.likeCount) + diff, // diff is taken from the current closure
    // });
    // const {
    //   posts: { posts, expandedPost },
    // } = getState();
    // const updated = posts.map((post) =>
    //   post.id !== postId ? post : mapLikes(post)
    // );
    // const updatedExpandedPost =
    //   expandedPost?.id === postId ? mapLikes(expandedPost) : undefined;
    // return { posts: updated, expandedPost: updatedExpandedPost };
  }
);

export { loadTrips, loadTripById, setBooking, getBooking, deleteBooking };
