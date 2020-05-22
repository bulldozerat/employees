import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 1rem;
  z-index: 1;
  padding: 2rem;
  min-width: 26rem;
  background: #284a45;
  color: #fff;
  h3 {
    margin: 0 0 1rem 0;
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;

export default ModalWrapper;
