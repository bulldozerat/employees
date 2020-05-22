import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  position: absolute;
  top: ${props => props.top || 0};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  z-index: 1;
  padding: 1.5rem;
  min-width: 26rem;
  background: #284a45;
  color: #fff;
  h3 {
    margin: 0 0 1rem 0;
    text-align: left;
  }
  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
`;

export default ModalWrapper;
