import styled, { keyframes } from 'styled-components';

const instrumentSpinner = keyframes`
  0%, 10% {
    transform: rotate(-45deg) scale(1);
    -webkit-transform: rotate(-45deg) scale(1);
  }
  20% {
    transform: rotate(-45deg) scale(1.5);
    -webkit-transform: rotate(-45deg) scale(1.5);
  }
  30% {
    transform: rotate(-30deg) scale(1.5);
    -webkit-transform: rotate(-30deg) scale(1.5);
  }
  40% {
    transform: rotate(-120deg) scale(2);
    -webkit-transform: rotate(-60deg) scale(2);
  }
  50% {
    transform: rotate(-30deg) scale(2);
    -webkit-transform: rotate(-30deg) scale(2);
  }
  60% {
    transform: rotate(-120deg) scale(2);
    -webkit-transform: rotate(-60deg) scale(2);
  }
  70% {
    transform: rotate(-45deg) scale(1.5);
    -webkit-transform: rotate(-45deg) scale(1.5);
  }
  80%, 90% {
    transform: rotate(-45deg) scale(0.9);
    -webkit-transform: rotate(-45deg) scale(0.9);
  }
  100% {
    transform: rotate(-45deg) scale(1);
    -webkit-transform: rotate(-45deg) scale(1);
  }
`;

export const SpinnerOverlay = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  i {
    --fa-primary-color: #4b2b11;
    --fa-secondary-color: #80451d;
    transform: rotate(-45deg); // rotate icon to have it initially appear vertical
    animation: 3s ${instrumentSpinner} infinite;
  }
`;
