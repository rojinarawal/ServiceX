import React, { useState } from 'react';
import loginBg from '../assets/images/LogIn/loginBg.jpg';
import { Link } from 'react-router-dom';
import { BsFillEyeFill } from 'react-icons/bs';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
  };

  return (
    <div className='h-screen w-screen'>
      <div className='flex items-center justify-center pt-16 gap-20'>
        <div className='w-full max-w-md p-6'>
          <h2 className='text-2xl font-bold text-center text-gray-800 mb-2'>
            Sign in
          </h2>
          <p className='text-center text-grayLight mb-12'>
            Welcome there! Sign in to continue with ServiceX
          </p>
          <form onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-grayDark mb-2'
              >
                Email
              </label>
              <input
                type='email'
                name='email'
                placeholder='Enter your email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border rounded-md text-sm focus:outline-none mb-6'
                required
              />
            </div>
            <div className='relative'>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700 mb-2'
              >
                Password
              </label>
              <input
                type='password'
                name='password'
                placeholder='Enter your password'
                value={formData.password}
                onChange={handleChange}
                className='w-full p-3 border rounded text-sm focus:outline-none mb-12'
                required
              />
              <BsFillEyeFill className='absolute top-10 right-5 text-xl text-gray-500 cursor-pointer' />
            </div>
            <button
              type='submit'
              className='w-full p-3 bg-primaryBlue text-white rounded-md transition'
            >
              Log In
            </button>
          </form>
          <p className='text-center mt-6'>
            <Link
              to='/signup'
              className='text-gray-500 text-sm hover:underline'
            >
              Don't have an account? Register
            </Link>
          </p>
        </div>
        <div>
          <img src={loginBg} alt='login background' />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
