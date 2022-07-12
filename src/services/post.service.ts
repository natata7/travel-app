import { BaseApiURL, ApiPath, PostsApiPath } from "../constants/api.constants";
import { HttpMethod } from "../constants/http.constants";
import authHeader from "./auth-header";

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

async function getAllTrips(): Promise<ITrip[]> {
  const response = await fetch(`${BaseApiURL}${ApiPath.TRIPS}`, {
    method: HttpMethod.GET,
    headers: authHeader()
  });
  const data = await response.json();

  return data;
}

async function getTrip(id:string) {
  const response = await fetch(
    `${BaseApiURL}${ApiPath.TRIPS}${PostsApiPath.ROOT}${id}`,
    {
      method: HttpMethod.GET,
    }
  );
  const data = await response.json();

  return data;
}

async function getBooking() {
  const response = await fetch(`${BaseApiURL}${ApiPath.BOOKINGS}`, {
    method: HttpMethod.GET,
  });
  const data = await response.json();

  return data;
}

const PostService = {
  getAllTrips,
  getTrip,
  getBooking,
};
export default PostService;
