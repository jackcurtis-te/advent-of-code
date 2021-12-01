
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home/home';
import { DayOne } from './dayOne/dayOne';

export const Router = () => (
  <Routes>
    <Route
      path="/dayone"
      element={<DayOne/>}
    />
    <Route
      path="/"
      element={<Home/>}
    />
  </Routes>
)
