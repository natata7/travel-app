import { BaseApiURL, ApiPath, PostsApiPath, BookingApiPath } from "../constants/api.constants";
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

export interface IQuery {
  tripId: string;
  userId: string;
  guests: number;
  date: string;
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
      headers: authHeader()
    }
  );
  const data = await response.json();

  return data;
}

async function setBooking(query: IQuery) {
  let headers:any = authHeader();
  headers['Content-Type']= 'application/json'
  const response = await fetch(`${BaseApiURL}${ApiPath.BOOKINGS}`, {
    method: HttpMethod.POST,
    headers: headers,
    body: JSON.stringify(query)
  })
  
  const data = await response.json();

  return data;
}

async function getBookings() {
  const response = await fetch(`${BaseApiURL}${ApiPath.BOOKINGS}`, {
    method: HttpMethod.GET,
    headers: authHeader()
  });
  const data = await response.json();

  return data;
}

async function deleteBooking(id: string) {
  const response = await fetch(`${BaseApiURL}${ApiPath.BOOKINGS}${BookingApiPath.ROOT}${id}`, {
    method: HttpMethod.DELETE,
    headers: authHeader()
  });
  if (response.status === 204){
    return true;
  } else{
    return false;
  }

  
}

const PostService = {
  getAllTrips,
  getTrip,
  setBooking,
  getBookings,
  deleteBooking
};
export default PostService;
