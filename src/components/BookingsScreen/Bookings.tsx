import "./Bookings.css";
import { useState, useEffect, useCallback } from "react";
import Loader from "../Loader/loader";
import BookingTripCard from "../BookingTripCard/BookingTripCard";
import IErrors from "../../interfaces/Error.interface";
import { IBooking } from "../../interfaces/Booking.interface";
import { useSelector, useDispatch } from "react-redux";
import { getBookings, deleteBooking } from "../../store/trip/actions";
import type { AppDispatch, IState } from "../../store/store";

function Bookings() {
  const [error, setError] = useState<IErrors>();
  const [isLoaded, setIsLoading] = useState(false);

  const dispatch = useDispatch<AppDispatch>();
  const { bookings }: any = useSelector<IState>((state) => ({
    bookings: state.trips.bookings,
  }));

  const handleCancelBooking = (id: string) => {
    dispatch(deleteBooking(id)); //bookings.filter((x) => x.id !== id));
  };

  // useMemo(() => {
  //   dispatch(getBookings())
  //     .then((res) => res)
  //     .then(
  //       (result) => {
  //         setIsLoaded(true);
  //       },
  //       (error) => {
  //         setIsLoaded(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  const handleBookingLoad = useCallback(() => {
    setIsLoading(false);
    dispatch(getBookings())
      .unwrap()
      .catch(() => {
        setIsLoading(true);
      })
      .finally(() => {
        setIsLoading(true);
      });
  }, [dispatch, setIsLoading]);

  useEffect(() => {
      handleBookingLoad();
  }, [handleBookingLoad]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <Loader />;
  } else if(!bookings.length){
    return <div className="trip-info__title">Card is empty</div>
  } else {
    return (
      <main className="bookings-page">
        <h1 className="visually-hidden">Travel App</h1>
        <ul className="bookings__list">
          {(bookings as IBooking[]).map((booking: any) => (
            <BookingTripCard
              booking={booking}
              key={booking.id}
              onClose={handleCancelBooking}
            />
          ))}
        </ul>
      </main>
    );
  }
}
export default Bookings;
