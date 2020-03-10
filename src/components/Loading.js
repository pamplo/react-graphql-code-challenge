import React from 'react';
import styled from 'styled-components';

const LoadingWrapper = styled.p`
  margin: 2rem 0;
  color: #bbb;
`;

const Loading = () => <LoadingWrapper>Carregando...</LoadingWrapper>;

export default Loading;
