import "./Home.css";
import { useEffect, useState } from "react";
import TripCard from "../TripCard/TripCard";
import Filter from "../Filter/Filter";
import Loader from "./loader/loader";
import { getTripDetails } from "../../helpers/tripService";

function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTripDetails()
      .then((res) => res)
      .then(
        (result) => {
          setIsLoaded(true);
          setTrips(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else {
    return (
      <main>
        <h1 className="visually-hidden">Travel App</h1>
        <Filter />
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <ul className="trip-list">
            {trips.map((trip) => (
              <TripCard trip={trip} key={trip.id} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
export default Home;
