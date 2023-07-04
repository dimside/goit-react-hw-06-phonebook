import PropTypes from 'prop-types';

import css from './Contact.module.css';

export const Contact = ({ contacts, contactDelete }) =>
  contacts.map(({ name, number, id }) => {
    return (
      <li key={id} className={css.contact_list_item}>
        <div>
          <span className={css.contact_list_item_name}>
            {name}: {number}
          </span>

          <button type="button" onClick={() => contactDelete(id)}>
            Delete
          </button>
        </div>
      </li>
    );
  });

Contact.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  contactDelete: PropTypes.func.isRequired,
};
