import styled from 'styled-components';

const inputHeight = 2.4;
const PeopleFiltersWrapper = styled.div`
  padding: 1.2rem 1.2rem 0.8rem 1.2rem;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 8px;
  margin-bottom: 2rem;

  h3 {
    margin: 0 0 0.8rem 0;
  }

  .search-field {
    position: relative;
    margin-bottom: 0.6rem;
    &.field-birth-year {
      margin-bottom: 0;
    }
  }
  label {
    display: inline-block;
    font-size: 0.8rem;
    margin-bottom: 0.2rem;
  }
  input,
  select {
    font-size: 1rem;
    padding: 0.6rem 0.6rem;
    height: ${inputHeight}rem;
    background-color: rgba(255, 255, 255, 0.9);
    border: 1px solid #b0b0b0;
    border-radius: 4px;
    width: 100%;
    &[type='checkbox'] {
      width: auto;
      margin-right: 4px;
      vertical-align: middle;
    }
    &:hover,
    &:focus {
      background-color: #fff;
    }
    &:disabled {
      background-color: rgba(200, 200, 200, 0.8);
    }
    &::placeholder,
    &.apply-placeholder-style {
      color: #666;
      font-size: 0.8rem;
    }
  }
  .input-birth-year-group {
    position: relative;
    input {
      padding-right: 6ch;
    }
    span.append {
      color: #666;
      position: absolute;
      bottom: 0;
      right: 0.6rem;
      line-height: ${inputHeight}rem;
      vertical-align: middle;
    }
  }
  .input-birth-year-append {
  }
  @media (min-width: 750px) {
    h3 {
      margin: 0.8rem 0;
    }
    .search-field-wrapper {
      display: flex;
      .search-field {
        flex-grow: 1;
        margin-right: 2rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export default PeopleFiltersWrapper;
