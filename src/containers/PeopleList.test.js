import React from 'react';
import { MockedProvider } from '@apollo/react-testing';
import { render, fireEvent } from '@testing-library/react';

import PeopleList, { LIST_PEOPLE_QUERY } from './PeopleList';

const mocks = [
  {
    request: {
      query: LIST_PEOPLE_QUERY,
      variables: { name: '', gender: '', birthYear: '' },
    },
    result: {
      data: {
        allPeople: {
          people: [
            {
              id: 'cGVvcGxlOjE=',
              name: 'Luke Skywalker',
              gender: 'male',
              filmConnection: {
                totalCount: 5,
              },
            },
            {
              id: 'cGVvcGxlOjI=',
              name: 'C-3PO',
              gender: 'n/a',
              filmConnection: {
                totalCount: 6,
              },
            },
            {
              id: 'cGVvcGxlOjM=',
              name: 'R2-D2',
              gender: 'n/a',
              filmConnection: {
                totalCount: 7,
              },
            },
            {
              id: 'cGVvcGxlOjQ=',
              name: 'Darth Vader',
              gender: 'male',
              filmConnection: {
                totalCount: 4,
              },
            },
            {
              id: 'cGVvcGxlOjU=',
              name: 'Leia Organa',
              gender: 'female',
              filmConnection: {
                totalCount: 5,
              },
            },
            {
              id: 'cGVvcGxlOjY=',
              name: 'Owen Lars',
              gender: 'male',
              filmConnection: {
                totalCount: 3,
              },
            },
            {
              id: 'cGVvcGxlOjc=',
              name: 'Beru Whitesun lars',
              gender: 'female',
              filmConnection: {
                totalCount: 3,
              },
            },
            {
              id: 'cGVvcGxlOjg=',
              name: 'R5-D4',
              gender: 'n/a',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjk=',
              name: 'Biggs Darklighter',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjEw',
              name: 'Obi-Wan Kenobi',
              gender: 'male',
              filmConnection: {
                totalCount: 6,
              },
            },
          ],
          pageInfo: {
            hasNextPage: true,
            endCursor: 'YXJyYXljb25uZWN0aW9uOjk=',
          },
          totalCount: 87,
        },
      },
    },
  },

  {
    request: {
      query: LIST_PEOPLE_QUERY,
      variables: { name: 'ig', gender: '', birthYear: '' },
    },
    result: {
      data: {
        allPeople: {
          people: [
            {
              id: 'cGVvcGxlOjk=',
              name: 'Biggs Darklighter',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjIz',
              name: 'IG-88',
              gender: 'none',
              filmConnection: {
                totalCount: 1,
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
          },
          totalCount: 2,
        },
      },
    },
  },

  {
    request: {
      query: LIST_PEOPLE_QUERY,
      variables: { name: '', gender: 'hermaphrodite', birthYear: '' },
    },
    result: {
      data: {
        allPeople: {
          people: [
            {
              id: 'cGVvcGxlOjE2',
              name: 'Jabba Desilijic Tiure',
              gender: 'hermaphrodite',
              filmConnection: {
                totalCount: 3,
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
          },
          totalCount: 1,
        },
      },
    },
  },

  {
    request: {
      query: LIST_PEOPLE_QUERY,
      variables: { name: '', gender: '', birthYear: '19BBY' },
    },
    result: {
      data: {
        allPeople: {
          people: [
            {
              id: 'cGVvcGxlOjE=',
              name: 'Luke Skywalker',
              gender: 'male',
              filmConnection: {
                totalCount: 5,
              },
            },
            {
              id: 'cGVvcGxlOjU=',
              name: 'Leia Organa',
              gender: 'female',
              filmConnection: {
                totalCount: 5,
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            endCursor: 'YXJyYXljb25uZWN0aW9uOjE=',
          },
          totalCount: 2,
        },
      },
    },
  },
  {
    request: {
      query: LIST_PEOPLE_QUERY,
      variables: { name: '', gender: 'female', birthYear: '19BBY' },
    },
    result: {
      data: {
        allPeople: {
          people: [
            {
              id: 'cGVvcGxlOjU=',
              name: 'Leia Organa',
              gender: 'female',
              filmConnection: {
                totalCount: 5,
              },
            },
          ],
          pageInfo: {
            hasNextPage: false,
            endCursor: 'YXJyYXljb25uZWN0aW9uOjA=',
          },
          totalCount: 1,
        },
      },
    },
  },

  {
    request: {
      query: LIST_PEOPLE_QUERY,
      variables: { name: '', gender: '', birthYear: 'unknown' },
    },
    result: {
      data: {
        allPeople: {
          people: [
            {
              id: 'cGVvcGxlOjg=',
              name: 'R5-D4',
              gender: 'n/a',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjE5',
              name: 'Jek Tono Porkins',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjI5',
              name: 'Arvel Crynyd',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjMx',
              name: 'Nien Nunb',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjMz',
              name: 'Nute Gunray',
              gender: 'male',
              filmConnection: {
                totalCount: 3,
              },
            },
            {
              id: 'cGVvcGxlOjM3',
              name: 'Roos Tarpals',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjM4',
              name: 'Rugor Nass',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjM5',
              name: 'Ric Olié',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
            {
              id: 'cGVvcGxlOjQw',
              name: 'Watto',
              gender: 'male',
              filmConnection: {
                totalCount: 2,
              },
            },
            {
              id: 'cGVvcGxlOjQx',
              name: 'Sebulba',
              gender: 'male',
              filmConnection: {
                totalCount: 1,
              },
            },
          ],
          pageInfo: {
            hasNextPage: true,
            endCursor: 'YXJyYXljb25uZWN0aW9uOjk=',
          },
          totalCount: 44,
        },
      },
    },
  },
];

jest.mock('../components/LoadMoreOnScroll', () => ({ children }) => children);

const getPeopleListContainer = () =>
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <PeopleList />
    </MockedProvider>
  );

describe('People list', () => {
  it('should render', async () => {
    getPeopleListContainer();
  });

  it('should display filters', async () => {
    const rendered = getPeopleListContainer();
    await rendered.findByText('Filtros');
  });

  it('should display list of people from query', async () => {
    const rendered = getPeopleListContainer();
    await rendered.findByText('Luke Skywalker');
    await rendered.findByText('Darth Vader');
    await rendered.findByText('Obi-Wan Kenobi');
  });

  it('should filter by name', async () => {
    const rendered = getPeopleListContainer();
    fireEvent.change(
      await rendered.findByPlaceholderText('Buscar por nome...'),
      {
        target: { value: 'ig' },
      }
    );
    await rendered.findByText('Carregando...');
    await rendered.findByText('Biggs Darklighter');
    await rendered.findByText('IG-88');
  });

  it('should filter by gender', async () => {
    const rendered = getPeopleListContainer();
    fireEvent.change(await rendered.findByTestId('select-gender'), {
      target: { value: 'hermaphrodite' },
    });
    await rendered.findByText('Carregando...');
    await rendered.findByText('Jabba Desilijic Tiure');
  });

  it('should filter by birth year', async () => {
    const rendered = getPeopleListContainer();
    fireEvent.change(
      await rendered.findByPlaceholderText('Buscar por ano de nascimento...'),
      {
        target: { value: '19' },
      }
    );
    await rendered.findByText('Carregando...');
    await rendered.findByText('Luke Skywalker');
    await rendered.findByText('Leia Organa');
  });

  it('should filter by gender AND birth year', async () => {
    const rendered = getPeopleListContainer();
    await fireEvent.change(
      await rendered.findByPlaceholderText('Buscar por ano de nascimento...'),
      {
        target: { value: '19' },
      }
    );
    await fireEvent.change(await rendered.findByTestId('select-gender'), {
      target: { value: 'female' },
    });
    await rendered.findByText('Carregando...');
    await rendered.findByText('Leia Organa');
  });

  it('should filter by birth year unknown', async () => {
    const rendered = getPeopleListContainer();
    await fireEvent(
      await rendered.findByText('Desconhecido'),
      new MouseEvent('click')
    );
    await rendered.findByText('Carregando...');
    await rendered.findByText('44');
    await rendered.findByText('R5-D4');
    await rendered.findByText('Watto');
  });
});
