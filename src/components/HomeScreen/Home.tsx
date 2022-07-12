import "./Home.css";
import { useEffect, useState, useCallback } from "react";
import TripCard from "../TripCard/TripCard";
import Filter from "../Filter/Filter";
import Loader from "../Loader/loader";
import { getFilteredTrips } from "../../helpers/getFilteredTrips";
import IFilter from "../../interfaces/Filter.interface";
import IErrors from "../../interfaces/Error.interface";
import { ITrip } from "../../interfaces/Trip.interface";
import { useSelector, useDispatch } from "react-redux";
import { loadTrips } from "../../store/trip/actions";
import type { AppDispatch, IState } from "../../store/store";

function Home() {
  const [error, setError] = useState<IErrors>();
  const [isLoaded, setIsLoading] = useState(false);
  const { trips }: any = useSelector<IState>((state) => ({
    trips: state.trips.trips,
  }));

  const [filterValues, setFilterValues] = useState({
    search: "",
    duration: "duration",
    level: "level",
  });
  const handlerFilterChange = (values: IFilter) => setFilterValues(values);
  const dispatch = useDispatch<AppDispatch>();
  let filteredTrips = null;
  if (trips) {
    filteredTrips = getFilteredTrips(trips, filterValues);
  }

  const handlePostsLoad = useCallback(() => {
    dispatch(loadTrips())
      .unwrap()
      .catch(() => {
        setIsLoading(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch, setIsLoading]);

  useEffect(() => {
    handlePostsLoad();
  }, [handlePostsLoad]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded && !trips) {
    return <Loader />;
  } else {
    return (
      <main>
        <h1 className="visually-hidden">Travel App</h1>
        <Filter values={filterValues} onChange={handlerFilterChange} />
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <ul className="trip-list">
            {filteredTrips.map((trip: ITrip) => (
              <TripCard trip={trip} key={trip.id} />
            ))}
          </ul>
        </section>
      </main>
    );
  }
}
export default Home;
