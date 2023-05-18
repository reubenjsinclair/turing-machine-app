import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import NewGame from './NewGame';


const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/newGame' element={<NewGame/>}></Route>
    </Routes>
  );
}

export default Main;