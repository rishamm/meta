import { Button } from '@material-tailwind/react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import React from 'react'
import styled from 'styled-components';

const InputField = styled.input`
  width: 100%;
  padding: 0.5rem;
  color:black
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const LoginForm = () => {
  return (
    <div className='text-white h-screen bg-black flex justify-center items-center '>

   <div className='border rounded-lg px-20 py-20'>
<div className='text-center py-3'>
<h4 className='text-xl font-bold'>Login</h4>
</div>
   <Formik
      initialValues={{ email: '', password: '',password2: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
        password2: Yup.string().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className='flex flex-col gap-4'>
        <div  className='flex flex-col gap-4'>
          <label htmlFor="email">Email Address</label>
          <Field type="email" name="email" component={InputField} />
          <ErrorMessage name="email" className='text-red-500' component="div" />
        </div>

        <div  className='flex flex-col gap-1'>
          <label htmlFor="password">Password</label>
          <Field type="password" name="password"  component={InputField} />
          <ErrorMessage name="password"  className='text-red-500' component="div" />
        </div>
        <div  className='flex flex-col gap-4'>
          <label htmlFor="password2"> Re-type Password</label>
          <Field type="password" name="password2"  component={InputField} />
          <ErrorMessage name="password2" className='text-red-500' component="div" />
        </div>
    
        <button type="submit"  className='border rounded-lg '>Submit</button>
      </Form>
    </Formik>
   </div>
   
      </div>
  )
}

export default LoginForm