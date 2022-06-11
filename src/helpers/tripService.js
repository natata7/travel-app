import { trips, bookings } from "./database";

export async function getTripDetails(id) {
  let response = trips;
  if(id){
    response = trips.find(x => x.id === id);
  }
  return new Promise((resolve, reject) => {
    setTimeout(
      () => (response ? resolve(response) : reject(Error("Failed to load"))),
      500
    );
  });
}

export async function getBookingsDetails(id) {
  const response = bookings;
  return new Promise((resolve, reject) => {
    setTimeout(
      () => (response ? resolve(response) : reject(Error("Failed to load"))),
      500
    );
  });
}