import React, { useState } from 'react';
import SignUpbG from '../../assets/images/SignUp/signupBg.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    licenseNo: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Form Data: ', formData);
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center bg-gray-50'>
      <div className='w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden'>
        <div className='flex flex-col md:flex-row'>
          <div className='md:w-1/2 bg-gray-200 flex items-center justify-center'>
            <img src={SignUpbG} alt='' />
          </div>
          <div className='md:w-1/2 p-8'>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div className='flex space-x-4'>
                <input
                  type='text'
                  name='firstName'
                  placeholder='First Name'
                  value={formData.firstName}
                  onChange={handleChange}
                  className='w-1/2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
                <input
                  type='text'
                  name='lastName'
                  placeholder='Last Name'
                  value={formData.lastName}
                  onChange={handleChange}
                  className='w-1/2 p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
              <input
                type='tel'
                name='phone'
                placeholder='Phone (optional)'
                value={formData.phone}
                onChange={handleChange}
                className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />
              <input
                type='text'
                name='licenseNo'
                placeholder='License No. (e.g., 0000-0000-000-XXXX)'
                value={formData.licenseNo}
                onChange={handleChange}
                className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />
              <div className='relative'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
                <span className='absolute top-3 right-3 text-gray-500 cursor-pointer'>
                  &#x1F441;
                </span>
              </div>
              <div className='relative'>
                <input
                  type='password'
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  value={formData.confirmPassword}
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
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
