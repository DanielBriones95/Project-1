import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Users from './user/pages/Users';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        
        
      </Routes>
      <Navigate to="/" />
    </Router>

  )
}

export default App;
