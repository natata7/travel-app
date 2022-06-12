import "./TripPage.css";
import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getTripDetails } from "../../helpers/tripService";
import Loader from "../Loader/loader";
import TripPopup from "../TripPopup/TripPopup";
import { ITrip } from "../../interfaces/Trip.interface";
import IErrors from "../../interfaces/Error.interface";

function TripPage() {
  const { tripId } = useParams<string>();
  const [error, setError] = useState<IErrors | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [trip, setTrip] = useState<ITrip>();
  const [currentTrip, setCurrentTrip] = useState<ITrip | null>();

  const handleAddPopupOpen = () => setCurrentTrip(trip);
  const handleAddPopupClose = () => setCurrentTrip(null);

  // const handleTripSave = useCallback<Function>((tripId: string) => {
  //   setCurrentTrip(tripId);
  // }, []);

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
          <img src={trip && trip.image} className="trip__img" alt={trip && trip.title} />
          <div className="trip__content">
            <div className="trip-info">
              <h3 className="trip-info__title">{trip && trip.title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration">
                  <strong>{trip && trip.duration}</strong> days
                </span>
                <span className="trip-info__level">{trip && trip.level}</span>
              </div>
            </div>
            <div className="trip__description">{trip && trip.description}</div>
            <div className="trip-price">
              <span>Price</span>
              <strong className="trip-price__value">{trip && trip.price} $</strong>
            </div>
            <button
              className="trip__button button"
              onClick={handleAddPopupOpen}
            >
              Book a trip
            </button>
          </div>
        </div>
        {currentTrip && (
          <TripPopup
            trip={currentTrip}
            // onSave={handleTripSave}
            onClose={handleAddPopupClose}
          />
        )}
      </main>
    );
  }
}
export default TripPage;
