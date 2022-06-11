import './TripCard.css';

function TripList({ trips }) {

    return (
        <section className="trips">
          <h2 className="visually-hidden">Trips List</h2>
          <ul className="trip-list">
            {trips.map((trip) => (
              <TripCard trip={trip} key={trip.id} />
            ))}
          </ul>
        </section>
    )
}
export default TripList;