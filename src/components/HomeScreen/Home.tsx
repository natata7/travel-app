import "./Home.css";
import { useEffect, useState } from "react";
import TripCard from "../TripCard/TripCard";
import Filter from "../Filter/Filter";
import Loader from "../Loader/loader";
import { getTripDetails } from "../../helpers/tripService";
import { getFilteredTrips } from '../../helpers/getFilteredTrips';
import IFilter from "../../interfaces/Filter.interface";
import IErrors from "../../interfaces/Error.interface";
import { ITrip } from "../../interfaces/Trip.interface";


function Home() {
  const [error, setError] = useState<IErrors>();
  const [isLoaded, setIsLoaded] = useState(false);
  const [trips, setTrips] = useState<ITrip[]>([]);

  const [filterValues, setFilterValues] = useState({search:'', duration: 'duration', level: 'level'});
  const handlerFilterChange = (values:IFilter) => setFilterValues(values);
  const filteredTrips = getFilteredTrips(trips, filterValues);

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
        <Filter
          values={filterValues}
          onChange={handlerFilterChange}
        />
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <ul className="trip-list">
            {filteredTrips.map((trip:ITrip) => (
              <TripCard trip={trip} key={trip.id} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
export default Home;
