import "./TripPopup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IErrors from "../../interfaces/Error.interface";
import { ITripPopupProps } from "../../interfaces/Trip.interface";
import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, IState } from "../../store/store";
import { setBooking } from "../../store/trip/actions";

function TripPopup({ trip, onClose }: ITripPopupProps) {
  const [guests, setGuests] = useState<number>(1);
  const [date, setDate] = useState<string>();
  const [errors, setErrors] = useState<any>({});
  const dispatch = useDispatch<AppDispatch>();
  const { user }: any = useSelector<IState>((state) => ({
    user: state.profile.user,
  }));

  const navigate = useNavigate();

  const disablePastDate = () => {
    const today = new Date();
    const dd = String(today.getDate() + 1).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    const yyyy = today.getFullYear();
    //setDate(yyyy + "-" + mm + "-" + dd);
    return yyyy + "-" + mm + "-" + dd;
  };

  const validateGuests = (value: number) => {
    let errors: IErrors = {};
    if (!value) {
      errors.guests = "Number is required";
    } else if (value < 1 || value > 10) {
      errors.guests = "Guests must from 1 to 10 person";
    }
    return errors;
  };
  const validateDate = (value: string) => {
    let errors: IErrors = {};
    if (new Date(value) <= new Date()) {
      errors.date = "Start date must be in future";
    }
    return errors;
  };

  const handleChangeDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setErrors(validateDate(event.target.value));

    //const date = new Date(event.target.value);
    setDate(event.target.value);
  };

  const handleChangeGuests = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();

    const currentGuestsValue = Number(event.target.value);
    setErrors(validateGuests(currentGuestsValue));
    if (currentGuestsValue < 1) {
      setGuests(1);
    } else if (currentGuestsValue > 10) {
      setGuests(10);
    } else {
      setGuests(currentGuestsValue);
    }
  };

  const handleSubmit = () => {
    let currDate: Date | string = new Date();
    if (date) {
      currDate = new Date(date);
    }
    currDate = currDate.toISOString();

    const query = {
      tripId: trip.id,
      userId: user.id,
      guests: guests,
      date: currDate,
    };
    dispatch(setBooking(query))
      .unwrap()
      .then(() => {
        //navigate("/", { replace: true });
      })
      .catch(() => {});

    navigate("/bookings", { replace: true });
  };

  return (
    <div>
      <div className="modal">
        <div className="trip-popup">
          <button className="trip-popup__close" onClick={onClose}>
            ×
          </button>
          <form
            className="trip-popup__form"
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <div className="trip-info">
              <h3 className="trip-info__title">{trip.title}</h3>
              <div className="trip-info__content">
                <span className="trip-info__duration">
                  <strong>{trip.duration}</strong> days
                </span>
                <span className="trip-info__level">{trip.level}</span>
              </div>
            </div>
            <label className="trip-popup__input input">
              <span className="input__heading">Date</span>
              <input
                name="date"
                type="date"
                required
                min={disablePastDate()}
                value={date || disablePastDate()}
                onChange={handleChangeDate}
              />
              {errors.date && <p className="help is-danger">{errors.date}</p>}
            </label>
            <label className="trip-popup__input input">
              <span className="input__heading">Number of guests</span>
              <input
                name="guests"
                type="number"
                min="1"
                max="10"
                required
                value={guests || 1}
                onChange={handleChangeGuests}
              />
              {errors.guests && (
                <p className="help is-danger">{errors.guests}</p>
              )}
            </label>
            <span className="trip-popup__total">
              Total:{" "}
              <output className="trip-popup__total-value">
                {trip.price * Number(guests)}$
              </output>
            </span>
            <button className="button" type="submit">
              Book a trip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default TripPopup;
