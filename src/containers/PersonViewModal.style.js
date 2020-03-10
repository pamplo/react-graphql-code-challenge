import styled from 'styled-components';

const PersonViewModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  overflow-y: scroll;

  /* Animate background on render */
  animation-duration: 0.3s;
  animation-name: fade-bg-in;
  animation-fill-mode: forwards;
  @keyframes fade-bg-in {
    from {
      background-color: rgba(9, 10, 15, 0);
    }
    to {
      background-color: rgba(9, 10, 15, 0.6);
    }
  }

  .modal-content {
    position: relative;
    width: calc(100% - 1.6rem);
    min-height: calc(100vh - 4rem);
    margin: 2rem 0.8rem;
    color: rgba(0, 0, 0, 0.65);
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.35);
    z-index: 20;

    /* Animate slide up on render */
    animation-duration: 0.3s;
    animation-name: slide-up-in;
    @keyframes slide-up-in {
      from {
        opacity: 0;
        transform: translateY(60px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  .modal-header {
    margin: 0;
    padding: 3.6rem 1.2rem 2.4rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background: radial-gradient(ellipse at bottom, #1e2b3c 0%, #090a0f 100%);

    font-size: 2.4rem;
    color: transparent;
    letter-spacing: 0.1rem;
    -webkit-text-stroke-color: #e1b000;
    -moz-text-stroke-color: #e1b000;
    -webkit-text-stroke-width: 1.6px;
    -moz-text-stroke-width: 1.6px;
  }

  .btn-close {
    color: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    right: 0;
    padding: 1.2rem;
    background: transparent;
    border: none;
    &:hover {
      color: rgba(255, 255, 255, 0.9);
      cursor: pointer;
    }
  }

  .person-details {
    padding: 1.2rem;
    ul {
      padding-left: 1.2rem;
      li {
        margin-bottom: 0.4rem;
      }
      h4 {
        margin: 0.4rem 0 0.4rem;
      }
    }
    h3 {
      color: rgba(0, 0, 0, 0.85);
      font-size: 1.2rem;
      margin-top: 2rem;
      padding-left: 0.6rem;
      border-left: 5px solid #e1b000;
    }
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 760px) {
    .modal-content {
      position: relative;
      max-width: 640px;
      left: 50%;
      min-height: calc(100vh - 12rem);
      margin: 6rem 0 6rem -320px;
    }
    .modal-header {
      margin: 0;
      padding-left: 2rem;
      padding-right: 2rem;
    }
    .person-details {
      padding: 0 2rem 2rem 2rem;
    }
  }
`;

export default PersonViewModalWrapper;
