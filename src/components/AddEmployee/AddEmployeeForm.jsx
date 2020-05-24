import React from 'react';

// Other
import { inject } from 'mobx-react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Components
import FormikFormWrapper from '../FormikFormWrapper';

const AddEmployeeForm = ({ companyStore, companyId, closeModal }) => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        jobArea: '',
        jobType: '',
        jobTitle: ''
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        dateOfBirth: Yup.string()
          .required('Birthde is required')
          .length(10, 'Birthdate need to be dd-mm-yyyy format')
          .matches(/(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d/g, 'Invalid Birthdate format'),
        jobArea: Yup.string().required('Job Area is required'),
        jobType: Yup.string().required('Job type is required'),
        jobTitle: Yup.string().required('Job title is required')
      })}
      onSubmit={values => {
        companyStore.addNewEmploee(values, companyId);
        closeModal();
      }}
      render={() => (
        <FormikFormWrapper>
          <Form>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name *</label>
              <Field name='firstName' type='text' placeholder='Enter first name' />
              <ErrorMessage name='firstName' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name *</label>
              <Field name='lastName' type='text' placeholder='Enter last name' />
              <ErrorMessage name='lastName' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='dateOfBirth'>Birth date *</label>
              <Field name='dateOfBirth' type='text' id='dateOfBirth' placeholder='Enter year dd-mm-yyyy' />
              <ErrorMessage name='dateOfBirth' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='jobArea'>Job area *</label>
              <Field name='jobArea' type='text' id='jobArea' placeholder='Enter job area' />
              <ErrorMessage name='jobArea' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='jobType'>Job type *</label>
              <Field name='jobType' type='text' id='jobType' placeholder='Enter Job type' />
              <ErrorMessage name='jobType' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='jobTitle'>Job title *</label>
              <Field name='jobTitle' type='text' id='jobTitle' placeholder='Enter job title' />
              <ErrorMessage name='jobTitle' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <button type='submit' className='btn btn-primary mr-2'>
                Add Employee
              </button>
            </div>
          </Form>
        </FormikFormWrapper>
      )}
    />
  );
};

export default inject('companyStore')(AddEmployeeForm);
