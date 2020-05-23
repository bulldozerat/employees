import React from 'react';

// Other
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { inject } from 'mobx-react';

// Components
import FormikFormWrapper from '../FormikFormWrapper';

const AddEmployeeForm = ({ companyStore, companyId }) => {
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
        dateOfBirth: Yup.string().required('Birth date is required'),
        jobArea: Yup.string().required('Job Area is required'),
        jobType: Yup.string().required('Job type is required'),
        jobTitle: Yup.string().required('Job title is required')
      })}
      onSubmit={values => {
        companyStore.addNewEmploee(values, companyId);
      }}
      render={() => (
        <FormikFormWrapper>
          <Form>
            <div className='form-group'>
              <label htmlFor='firstName'>First Name *</label>
              <Field name='firstName' type='text' />
              <ErrorMessage name='firstName' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='lastName'>Last Name *</label>
              <Field name='lastName' type='text' />
              <ErrorMessage name='lastName' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='dateOfBirth'>Birth date *</label>
              <Field name='dateOfBirth' type='text' id='dateOfBirth' />
              <ErrorMessage name='dateOfBirth' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='jobArea'>Job area *</label>
              <Field name='jobArea' type='text' id='jobArea' />
              <ErrorMessage name='jobArea' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='jobType'>Job type *</label>
              <Field name='jobType' type='text' id='jobType' />
              <ErrorMessage name='jobType' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='jobTitle'>Job title *</label>
              <Field name='jobTitle' type='text' id='jobTitle' />
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
