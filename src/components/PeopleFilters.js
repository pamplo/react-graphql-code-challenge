import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import useDidUpdate from '../utils/useDidUpdate';
import { genders } from '../utils/gender';
import PeopleFiltersWrapper from './PeopleFilters.style';

const PeopleFilters = ({ search }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [birthYearUnknown, setBirthYearUnknown] = useState(false);

  const callSearch = useCallback(
    (name, gender, birthYear, birthYearUnknown) => {
      const birthYearValue = birthYearUnknown
        ? 'unknown'
        : birthYear
        ? birthYear + 'BBY'
        : '';
      search(name, gender, birthYearValue);
    },
    []
  );
  const debouncedSearch = useCallback(debounce(callSearch, 200), []);

  // Call search on input changes
  useDidUpdate(() => {
    debouncedSearch(name, gender, birthYear, birthYearUnknown);
  }, [name, birthYear]);
  useDidUpdate(() => callSearch(name, gender, birthYear, birthYearUnknown), [
    gender,
    birthYearUnknown,
  ]);

  return (
    <PeopleFiltersWrapper>
      <h3>Filtros</h3>
      <div className="search-field-wrapper">
        <div className="search-field">
          <label htmlFor="input-name">Nome</label>
          <input
            id="input-name"
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Buscar por nome..."
          />
        </div>
        <div className="search-field">
          <label htmlFor="select-gender">Gênero</label>
          <select
            id="select-gender"
            data-testid="select-gender"
            value={gender}
            onChange={e => {
              setGender(e.target.value);
            }}
            className={gender === '' ? 'apply-placeholder-style' : ''}
          >
            <option value="">Buscar por gênero...</option>
            {Object.entries(genders).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
        <div className="search-field field-birth-year">
          <label htmlFor="input-birth-year">Ano de Nascimento</label>
          <div className="input-birth-year-group">
            <input
              id="input-birth-year"
              type="text"
              value={birthYearUnknown ? 'Desconhecido' : birthYear}
              onChange={e => setBirthYear(e.target.value)}
              disabled={birthYearUnknown}
              placeholder="Buscar por ano de nascimento..."
            />
            <span className="append">BBY</span>
          </div>
          <div className="checkbox-group">
            <input
              id="input-birth-year-unknown"
              type="checkbox"
              checked={birthYearUnknown}
              onChange={e => setBirthYearUnknown(e.target.checked)}
            />
            <label htmlFor="input-birth-year-unknown">Desconhecido</label>
          </div>
        </div>
      </div>
    </PeopleFiltersWrapper>
  );
};

PeopleFilters.propTypes = {
  search: PropTypes.func.isRequired,
};

export default PeopleFilters;
