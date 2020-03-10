import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/react-hooks';
import { getGenderTranslated } from '../utils/gender';
import IconClose from '../components/icons/IconClose';
import Loading from '../components/Loading';
import Error from '../components/Error';
import useDidUpdate from '../utils/useDidUpdate';
import PersonViewModalWrapper from './PersonViewModal.style';

const GET_PERSON_QUERY = gql`
  query GetPersonById($personID: ID) {
    person(id: $personID) {
      name
      birthYear
      height
      mass
      hairColor
      skinColor
      eyeColor
      gender
      homeworld {
        name
        population
      }
      species {
        name
        classification
        designation
        averageHeight
        averageLifespan
        language
        homeworld {
          name
          population
        }
      }
      vehicleConnection {
        vehicles {
          id
          name
          model
          length
          crew
          passengers
          maxAtmospheringSpeed
        }
      }
      filmConnection {
        films {
          id
          title
          director
          releaseDate
        }
      }
    }
  }
`;

// eslint-disable-next-line react/prop-types
const ListInfoItem = ({ label, value, append = '' }) => {
  const formattedValue =
    typeof value === 'number'
      ? new Intl.NumberFormat('pt-PT').format(value)
      : value;
  return (
    <li>
      <strong>{label}:</strong> {formattedValue ? formattedValue + append : '-'}
    </li>
  );
};

const PersonViewModal = ({ personID, personName, visible, handleClose }) => {
  const [loadPerson, { called, loading, error, refetch, data }] = useLazyQuery(
    GET_PERSON_QUERY,
    {
      notifyOnNetworkStatusChange: true,
    }
  );
  useDidUpdate(() => {
    // Only load the user when visible
    if (visible) {
      if (!called) {
        loadPerson({
          variables: {
            personID,
          },
        });
      } else {
        refetch({
          personID,
        });
      }
    }
  }, [visible]);

  useDidUpdate(() => {
    // Avoid scrolling the body with the modal open
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [visible]);

  if (!visible) return <></>;
  return (
    <PersonViewModalWrapper>
      <div className="modal-content">
        <h1 className="modal-header">{personName}</h1>
        <button
          role="button"
          className="btn-close"
          tabIndex="0"
          onClick={handleClose}
          onKeyPress={handleClose}
        >
          <IconClose />
        </button>
        <div className="person-details">
          {loading && <Loading />}
          {error && <Error error={error} />}
          {!error && !loading && data && (
            <>
              <h3>Informações</h3>
              <ul>
                <ListInfoItem label="Nome" value={data.person.name} />
                <ListInfoItem
                  label="Gênero"
                  value={getGenderTranslated(data.person.gender)}
                />
                <ListInfoItem
                  label="Ano de nascimento"
                  value={data.person.birthYear}
                />
                <ListInfoItem
                  label="Altura"
                  value={data.person.height}
                  append="cm"
                />
                <ListInfoItem
                  label="Peso"
                  value={data.person.mass}
                  append="kg"
                />
                <ListInfoItem
                  label="Cor do cabelo"
                  value={data.person.hairSkin}
                />
                <ListInfoItem
                  label="Cor da pele"
                  value={data.person.skinColor}
                />
                <ListInfoItem
                  label="Cor dos olhos"
                  value={data.person.eyeColor}
                />
              </ul>

              <h3>Espécie</h3>
              <ul>
                <ListInfoItem
                  label="Nome da espécie"
                  value={data.person.species?.name}
                />
                <ListInfoItem
                  label="Língua"
                  value={data.person.species?.language}
                />
                <ListInfoItem
                  label="Classificação"
                  value={data.person.species?.classification}
                />
                <ListInfoItem
                  label="Designação"
                  value={data.person.species?.designation}
                />
                <ListInfoItem
                  label="Altura média"
                  value={data.person.species?.averageHeight}
                  append="cm"
                />
                <ListInfoItem
                  label="Expectativa de vida"
                  value={data.person.species?.averageLifespan}
                  append=" anos"
                />
                <li>
                  <h4>Planeta de origem da espécie</h4>
                  <ul>
                    <ListInfoItem
                      label="Nome do planeta"
                      value={data.person.species?.homeworld?.name}
                    />
                    <ListInfoItem
                      label="População"
                      value={data.person?.species?.homeworld?.population}
                    />
                  </ul>
                </li>
              </ul>

              <h3>Planeta Natal</h3>
              <ul>
                <ListInfoItem
                  label="Nome:"
                  value={data.person.homeworld.name || '-'}
                />
                <ListInfoItem
                  label="População:"
                  value={data.person.homeworld.population || '-'}
                />
              </ul>

              <h3>Veículos</h3>
              <ul>
                {data.person.vehicleConnection.vehicles.map(vehicle => (
                  <li key={vehicle.id}>
                    <h4>{vehicle.name}</h4>
                    <ul>
                      <ListInfoItem label="Modelo:" value={vehicle.model} />
                      <ListInfoItem
                        label="Comprimento:"
                        value={vehicle.length}
                        append="m"
                      />
                      <ListInfoItem label="Tripulantes:" value={vehicle.crew} />
                      <ListInfoItem
                        label="Passageiros:"
                        value={vehicle.passengers}
                      />
                      <ListInfoItem
                        label="Máx Velocidade na Atmosfera:"
                        value={vehicle.maxAtmospheringSpeed}
                      />
                    </ul>
                  </li>
                ))}
              </ul>
              {data.person.vehicleConnection.vehicles.length === 0 && (
                <p>
                  <em>Nenhum veículo encontrado.</em>
                </p>
              )}

              <h3>Filmes</h3>
              <ul>
                {data.person.filmConnection.films.map(film => (
                  <li key={film.id}>
                    <h4>{film.title}</h4>
                    <ul>
                      <ListInfoItem label="Diretor" value={film.director} />
                      <ListInfoItem
                        label="Lançamento"
                        value={film.releaseDate}
                      />
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
      <div className="overlay" onClick={handleClose}></div>
    </PersonViewModalWrapper>
  );
};

PersonViewModal.propTypes = {
  personID: PropTypes.string.isRequired,
  personName: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default PersonViewModal;
