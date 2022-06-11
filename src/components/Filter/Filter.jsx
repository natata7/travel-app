import './Filter.css';
import { TripDuration, TripLevel } from '../../enums/enum';
import { DEFAULT_FILTER_VALUE } from '../../constants/filter.constants';

const durationOptions = ['duration'].concat(Object.values(TripDuration));
const levelOptions = ['level'].concat(Object.values(TripLevel));

function Filter({ values, isDisabled, onChange, onPopupOpen }) {

    const handleChange = ({ target }) => {
        const { name, value } = target;

        onChange({
            ...values,
            [name]: value,
        });
    };

    return (
        <section className="trips-filter">
            <h2 className="visually-hidden">Trips filter</h2>
            <form className="trips-filter__form" autoComplete="off">
                <label className="trips-filter__search input">
                    <span className="visually-hidden">Search by name</span>
                    <input
                        name="search"
                        type="search"
                        placeholder="search by title"
                        value={values.search}
                        disabled={isDisabled}
                        onChange={handleChange} />
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by duration</span>
                    <select name="duration"
                        value={values.duration}
                        disabled={isDisabled}
                        onChange={handleChange}
                    >
                        {durationOptions.map((it) => (
                            <option value={it} key={it}>
                                {it}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="select">
                    <span className="visually-hidden">Search by level</span>
                    <select name="level"
                        value={values.level}
                        disabled={isDisabled}
                        onChange={handleChange}
                    >
                        {levelOptions.map((it) => (
                            <option value={it} key={it}>
                                {it}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
        </section>
    );
}
export default Filter;