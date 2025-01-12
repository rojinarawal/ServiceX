import React, { useState } from 'react';
import AuthHeader from '../../layouts/headers/AuthHeader';
import SignUpBg from '../../assets/images/SignUp/signupBg.png';

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
    console.log('Form Data:', formData);
  };

  return (
    <>
      <AuthHeader />
      <div className='flex flex-col'>
        <div className='flex flex-col md:flex-row'>
          {/* Left Side: Image */}
          <div className='flex items-end justify-end'></div>

          {/* Right Side: Form */}
          <div className='md:w-1/2 p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Fields */}
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

              {/* Email */}
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={formData.email}
                onChange={handleChange}
                className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />

              {/* Phone */}
              <input
                type='tel'
                name='phone'
                placeholder='Phone (optional)'
                value={formData.phone}
                onChange={handleChange}
                className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
              />

              {/* License Number */}
              <input
                type='text'
                name='licenseNo'
                placeholder='License No. (e.g., 0000-0000-000-XXXX)'
                value={formData.licenseNo}
                onChange={handleChange}
                className='w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500'
                required
              />

              {/* Password */}
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

              {/* Confirm Password */}
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

              {/* Submit Button */}
              <button
                type='submit'
                className='w-full p-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
