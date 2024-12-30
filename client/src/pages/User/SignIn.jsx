import React, { useState } from 'react';

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
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='w-full max-w-md bg-white shadow-md rounded-lg p-8'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-4'>
          Sign in
        </h2>
        <p className='text-center text-gray-600 mb-6'>
          Welcome there! Sign in to continue with ServiceX
        </p>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <input
              type='email'
              name='email'
              placeholder='Enter your email'
              value={formData.email}
              onChange={handleChange}
              className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
          </div>
          <div className='relative'>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter your password'
              value={formData.password}
              onChange={handleChange}
              className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              required
            />
            <span className='absolute top-3 right-3 text-gray-500 cursor-pointer'>
              &#x1F441;
            </span>
          </div>
          <button
            type='submit'
            className='w-full p-3 bg-customBlue text-white rounded hover:bg-blue-600 transition'
          >
            Log In
          </button>
        </form>
        <p className='text-center text-gray-600 mt-4'>
          Don’t have an account yet?{' '}
          <a href='/signup' className='text-blue-500 hover:underline'>
            Register for free
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
