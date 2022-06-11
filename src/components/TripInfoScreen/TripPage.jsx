import './TripPage.css';
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getTripDetails } from "../../helpers/tripService";
import Loader from "../Loader/loader";
import TripPopup from "../TripPopup/TripPopup";


function TripPage() {
  const { tripId } = useParams();
  console.log(tripId);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [trip, setTrip] = useState([]);
  const [currentTrip, setCurrentTrip] = useState(null);

  const handleAddPopupOpen = () => setCurrentTrip(trip);
  const handleAddPopupClose = () => setCurrentTrip(null);

  const handleTripSave = useCallback((todo) => {
    setCurrentTrip(null)
  });

  useEffect(() => {
    getTripDetails(tripId)
      .then((res) => res)
      .then(
        (result) => {
          setIsLoaded(true);
          setTrip(result);
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
      <main className="trip-page">
        <h1 className="visually-hidden">Travel App</h1>
        <div className="trip">
          <img src={trip.image} className="trip__img" alt={trip.title} />
          <div className="trip__content">
            <div className="trip-info">
              <h3 className="trip-info__title">{trip.title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration"><strong>{trip.duration}</strong> days</span>
                <span className="trip-info__level">{trip.level}</span>
              </div>
            </div>
            <div className="trip__description">{trip.description}</div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">{trip.price} $</strong>
            </div>
            <button
              className="trip__button button"
              onClick={handleAddPopupOpen}
            >
              Book a trip</button>
          </div>
        </div>
        {
          currentTrip && (
            <TripPopup
              trip={currentTrip}
              onSave={handleTripSave}
              onClose={handleAddPopupClose}
            />
          )
        }
      </main>
    );
  }
}
export default TripPage;