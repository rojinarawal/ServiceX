import React from 'react';

const AuthHeader = () => {
  return (
    <header className='flex justify-between items-center px-32 py-4 bg-white border-b border-b-gray-300'>
      {/* Logo */}
      <div className='text-2xl font-bold text-blue-900'>ServiceX</div>

      {/* Sign Up Button */}
      <button className='bg-customBlue text-white px-10 py-2 rounded hover:bg-blue-700'>
        Sign Up
      </button>
    </header>
  );
};

export default AuthHeader;
