import styled from 'styled-components';

const PeopleListItemWrapper = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #ddd;
  padding: 0 2.6rem 0 1.2rem;
  position: relative;
  transition: 0.2s background-color;
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-style: none;
  }

  .name {
    color: #232425;
    font-size: 1.4rem;
    margin-bottom: 0.6rem;
    transition: 0.2s color;
  }
  .description {
    color: #909499;
    font-size: 0.8rem;
    line-height: 1rem;
    margin: 0 0 1rem 0;
    > span {
      display: block;
    }
  }
  .icon-open {
    position: absolute;
    right: 1.2rem;
    top: 50%;
    margin-top: -0.5rem;
    margin-left: -0.5rem;
    height: 1rem;
    fill: #bbb;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: #fff;
    outline: none;
    .name {
      /* color: #34a8da; */
      text-shadow: 2px 2px #e1b000;
    }
    .icon-open {
      fill: #ccc;
    }
  }
  @media (min-width: 400px) {
    .name {
      margin-bottom: 0.8rem;
    }
    .description {
      line-height: 0.8rem;
      span {
        display: inline-block;
      }
    }
    .gender {
      border-right: 1px solid #ccc;
      margin-right: 0.8rem;
      padding-right: 0.8rem;
    }
  }
`;

export default PeopleListItemWrapper;
