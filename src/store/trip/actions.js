import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const loadTrips = createAsyncThunk(
  ActionType.ALL_TRIPS,
  async (filters, { extra: { services } }) => {
    // const posts = await services.post.getAllPosts(filters);
    // return { posts };
  }
);

const toggleExpandedTrip = createAsyncThunk(
  ActionType.SET_EXPANDED_TRIP,
  async (postId, { extra: { services } }) => {
    // const post = postId ? await services.post.getPost(postId) : undefined;
    // return { post };
  }
);

const setBooking = createAsyncThunk(
  ActionType.SET_BOKING,
  async (postId, { extra: { services } }) => {
    //const post = await services.post.getPost(postId);
    //return { post };
  }
);

const getBooking = createAsyncThunk(
  ActionType.GET_BOKING,
  async (post, { extra: { services } }) => {
    //const { id } = await services.post.addPost(post);
    //const newPost = await services.post.getPost(id);

    //return { post: newPost };
  }
);

const deleteBooking = createAsyncThunk(
  ActionType.DELETE_BOKING,
  async (postId, { getState, extra: { services } }) => {
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

export {
  loadTrips,
  toggleExpandedTrip,
  setBooking,
  getBooking,
  deleteBooking,
};
