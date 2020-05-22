import styled from '@emotion/styled';

const EmployeesWrapper = styled.div`
  padding: 1rem;
  background: #e3e3e3;
  margin-bottom: 0.1rem;
  > div {
    margin-bottom: 0.5rem;
  }
  > div:last-of-type {
    margin-bottom: 0;
  }
  .employees-name-wrapper {
    position: relative;
  }
  .employees-job-area-wrapper {
    position: relative;
    display: flex;
    justify-content: space-between;
    .trash {
      color: #ba1a1a;
      cursor: pointer;
    }
  }
`;

export default EmployeesWrapper;
