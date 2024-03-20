import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlaces from './Places/pages/NewPlace';
import UserPlaces from './Places/pages/UserPlaces';
import UpdatePlaces from './Places/pages/UpdatePlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';

const App = () => {
  return (
    <Router>
      <MainNavigation/>
      <main>
        <Routes>
          <Route exact path="/" element={<Users/>}></Route>
          <Route exact path="/:userId/places" element={<UserPlaces/>}></Route>
          <Route path="/places/new" element={<NewPlaces/>}></Route>
          <Route path='/places/:placeId' element={<UpdatePlaces/>}></Route>

          {/* <Route path="/" element={<Navigate replace to="/" />} ></Route>*/}
        </Routes>

        {/* <NavLink to="/"/> */}
        
      </main>
    </Router>
  
  )
}

export default App;
