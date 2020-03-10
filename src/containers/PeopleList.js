import React, { useState } from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Loading from '../components/Loading';
import Error from '../components/Error';
import LoadMoreOnScroll from '../components/LoadMoreOnScroll';
import PeopleListItem from '../components/PeopleListItem';
import PeopleFilters from '../components/PeopleFilters';
import PersonViewModal from './PersonViewModal';
import PeopleListWrapper from './PeopleList.style';

export const LIST_PEOPLE_QUERY = gql`
  query PeopleList(
    $cursor: String
    $name: String
    $gender: String
    $birthYear: String
  ) {
    allPeople(
      first: 10
      after: $cursor
      name: $name
      gender: $gender
      birthYear: $birthYear
    ) {
      people {
        id
        name
        gender
        filmConnection {
          totalCount
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
`;

const PeopleList = () => {
  const { data, error, loading, refetch, fetchMore } = useQuery(
    LIST_PEOPLE_QUERY,
    {
      notifyOnNetworkStatusChange: true,
      variables: { name: '', gender: '', birthYear: '' },
    }
  );
  const [personViewModalProps, setPersonViewModalProps] = useState({
    visible: false,
    personID: '',
    personName: '',
  });

  const handlePersonClicked = (personID, personName) => {
    setPersonViewModalProps({
      visible: true,
      personID,
      personName,
    });
  };
  const handlePersonViewModalClose = () => {
    setPersonViewModalProps({
      ...personViewModalProps,
      visible: false,
    });
  };

  const loadMorePeople = () =>
    fetchMore({
      variables: {
        cursor: data.allPeople.pageInfo.endCursor,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          allPeople: {
            ...fetchMoreResult.allPeople,
            people: [
              ...prev.allPeople.people,
              ...fetchMoreResult.allPeople.people,
            ],
          },
        });
      },
    });

  if (loading && !data) return <Loading />;
  if (error && !data) return <Error error={error} />;

  return (
    <PeopleListWrapper>
      <LoadMoreOnScroll
        loadMore={loadMorePeople}
        hasMore={data.allPeople.pageInfo.hasNextPage}
        loading={loading}
        error={error}
      >
        <PeopleFilters
          search={(name, gender, birthYear) => {
            refetch({
              name,
              gender,
              birthYear,
            });
          }}
        />

        {loading && <Loading />}
        {!loading && (
          <p>
            {data.allPeople.totalCount === 1 ? (
              <span>
                Foi encontrado <strong>{data.allPeople.totalCount}</strong>{' '}
                resultado.
              </span>
            ) : (
              <span>
                Foram encontrados <strong>{data.allPeople.totalCount}</strong>{' '}
                resultados.
              </span>
            )}
          </p>
        )}

        <div className="people-list">
          {data.allPeople.people.map(person => (
            <PeopleListItem
              key={person.id}
              person={person}
              handleClick={handlePersonClicked}
            />
          ))}
        </div>
      </LoadMoreOnScroll>
      <PersonViewModal
        {...personViewModalProps}
        handleClose={handlePersonViewModalClose}
      />
    </PeopleListWrapper>
  );
};

export default PeopleList;
