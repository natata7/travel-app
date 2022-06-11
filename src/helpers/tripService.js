import { trips, bookings } from "./database";

export async function getTripDetails(id) {
  let response = trips;
  if (id) {
    response = trips.find((x) => x.id === id);
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
  
  const sortByDate = (arr) => {
    const sorter = (a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    };
    arr.sort(sorter);
  };
  sortByDate(response);

  return new Promise((resolve, reject) => {
    setTimeout(
      () => (response ? resolve(response) : reject(Error("Failed to load"))),
      500
    );
  });
}
