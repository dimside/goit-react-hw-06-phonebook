// import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter, setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div className={css.filter}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={changeFilter}
        className={css.filter_input}
      />
    </div>
  );
};

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   changeFilter: PropTypes.func.isRequired,
// };
