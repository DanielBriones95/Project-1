import React, {useState, useCallback } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlaces from './Places/pages/NewPlace';
import UserPlaces from './Places/pages/UserPlaces';
import UpdatePlaces from './Places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import { AuthContext } from './shared/context/auth-context';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback (() =>{
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback (() =>{
    setIsLoggedIn(false);
  }, []);


  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation/>
        <main>
          <Routes>
            <Route path="/" element={<Users/>}></Route>
            <Route path="/:userId/places" element={<UserPlaces/>}></Route>
            <Route path="/places/new" element={<NewPlaces/>}></Route>
            <Route path='/places/:placeId' element={<UpdatePlaces/>}></Route>
            <Route path='/auth' element={<Auth/>}></Route>
            {/* <Route path="/" element={<Navigate replace to="/" />} ></Route>*/}
          </Routes>

          {/* <NavLink to="/"/> */}
          
        </main>
      </Router>
    </AuthContext.Provider>
    
  
  )
}

export default App;
