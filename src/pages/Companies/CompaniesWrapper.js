import styled from '@emotion/styled';

const CompaniesWrapper = styled.div`
  .company-element {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    padding: 1rem;
    background: gray;
    color: #fff;
    .company-name {
      font-weight: bold;
      font-size: 1.7rem;
    }
    .rename-wrapper {
      flex-grow: 1;
      text-align: right;
      .rename-pen {
        cursor: pointer;
      }
    }
  }
`;

export default CompaniesWrapper;
