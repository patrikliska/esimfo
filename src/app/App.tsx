import React, { useEffect, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { addAlpha, colors } from '../colors/colors';
import Menu from '../components/Menu';
import { ProductMarket } from '../pages/ProductMarket';

import {
  styledPageContainer,
  styledAppContainer,
  styledContentContainer,
} from './styles';

const App = () => {
  return (
    <div style={styledAppContainer()}>
      {/* <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
        </nav> */}
      <Menu />
      <div style={styledContentContainer()}>
        <Routes>
          <Route
            path='/'
            element={
              <div style={styledPageContainer()}>
                <ProductMarket />
              </div>
            }
          />
          <Route
            path='about'
            element={
              <div style={styledPageContainer()}>
                <div
                  style={{ backgroundColor: 'blue', width: 50, height: 50 }}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
