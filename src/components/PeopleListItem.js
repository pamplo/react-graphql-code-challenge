import React from 'react';
import PropTypes from 'prop-types';
import { getGenderTranslated } from '../utils/gender';
import IconOpen from './icons/IconOpen';
import PeopleListItemWrapper from './PeopleListItem.style';

const pluralizeMovieCount = count =>
  count === 1 ? `${count} filme` : `${count} filmes`;

const PeopleListItem = ({ person, handleClick }) => {
  return (
    <PeopleListItemWrapper
      tabIndex="0"
      onClick={() => handleClick(person.id, person.name)}
      role="button"
    >
      <h3 className="name">{(person.id, person.name)}</h3>
      <p className="description">
        <span className="gender">
          Gênero: <strong>{getGenderTranslated(person.gender)}</strong>
        </span>
        <span className="film-count">
          Participou de:{' '}
          <strong>
            {pluralizeMovieCount(person.filmConnection.totalCount)}
          </strong>
        </span>
      </p>
      <IconOpen />
    </PeopleListItemWrapper>
  );
};

PeopleListItem.propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    filmConnection: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default PeopleListItem;
