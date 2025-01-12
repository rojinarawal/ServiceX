import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from '../pages/User/SignUp';
import SignIn from '../authentication/SignIn';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
