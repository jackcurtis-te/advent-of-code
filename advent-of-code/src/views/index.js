
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home/home';
import { DayOne } from './dayOne/dayOne';
import { DayTwo } from './dayTwo/dayTwo';

export const Router = () => (
  <Routes>
    <Route
      path="/day1"
      element={<DayOne/>}
    />
    <Route
      path="/day2"
      element={<DayTwo/>}
    />
    <Route
      path="/"
      element={<Home/>}
    />
  </Routes>
)
