import styled from '@emotion/styled';

const FormikFormWrapper = styled.div`
  margin-top: 2rem;
  .form-group {
    margin-bottom: 1rem;
    label {
      display: inline-block;
      min-width: 10rem;
      text-align: left;
    }
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 100%;
    background: #fff;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .formik-error {
    font-size: 1.3rem;
    text-align: right;
  }
`;

export default FormikFormWrapper;
