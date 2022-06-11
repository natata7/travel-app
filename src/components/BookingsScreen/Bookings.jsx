import "./Bookings.css";
import { useMemo, useState } from "react";
import { getBookingsDetails } from "../../helpers/tripService";
import Loader from "../Loader/loader";
import BookingTripCard from "../BookingTripCard/BookingTripCard";

function Bookings() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [bookings, setBookings] = useState([]);

    const handleCancelBooking = (id) =>{
        console.log(id)
        setBookings(bookings.filter(x => x.id !== id))
    }

    useMemo(() => {
        getBookingsDetails()
            .then((res) => res)
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBookings(result);
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
            <main className="bookings-page">
                <h1 className="visually-hidden">Travel App</h1>
                <ul className="bookings__list">
                    {bookings.map((booking) => (
                        <BookingTripCard booking={booking} key={booking.id} onClose={handleCancelBooking} />
                    ))}
                </ul>
            </main>
        )
    }
}
export default Bookings;