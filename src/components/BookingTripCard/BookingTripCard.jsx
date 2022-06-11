import './BookingTripCard.css';
import { Link } from "react-router-dom";

function BookingTripCard({ booking, onClose }) {
    

    var date  = new Date(booking.date);

    return (
        <li className="booking">
            <h3 className="booking__title">{booking.trip.title}</h3>
            <span className="booking__guests">{booking.guests} guests</span>
            <span className="booking__date">{date.toLocaleDateString("ro-RO")}</span>
            <span className="booking__total">{booking.totalPrice} $</span>
            <button className="booking__cancel" title="Cancel booking" onClick={() => onClose(booking.id)}>
                <span className="visually-hidden">Cancel booking</span>
                ×
            </button>
        </li>
    )
}
export default BookingTripCard;