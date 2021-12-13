
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './home/home';
import { DayOne } from './dayOne/dayOne';
import { DayTwo } from './dayTwo/dayTwo';
import { DayThree } from './dayThree/dayThree';
import { DayFour } from './dayFour/dayFour';
import { DayFive } from './dayFive/dayFive';
import { DaySix } from './daySix/daySix';
import { DaySeven } from './daySeven/daySeven';
import { DayEight } from './dayEight/dayEight';
import { DayNine } from './dayNine/dayNine';
import { DayTen } from './dayTen/dayTen';
import { DayEleven } from './dayEleven/dayEleven';
import { DayTwelve } from './dayTwelve/dayTwelve';
import { DayThirteen } from './dayThirteen/dayThirteen';

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
      path="/day3"
      element={<DayThree/>}
    />
    <Route
      path="/day4"
      element={<DayFour/>}
    />
    <Route
      path="/day5"
      element={<DayFive/>}
    />
    <Route
      path="/day6"
      element={<DaySix/>}
    />
    <Route
      path="/day7"
      element={<DaySeven/>}
    />
    <Route
      path="/day8"
      element={<DayEight/>}
    />
    <Route
      path="/day9"
      element={<DayNine/>}
    />
    <Route
      path="/day10"
      element={<DayTen/>}
    />
    <Route
      path="/day11"
      element={<DayEleven/>}
    />
    <Route
      path="/day12"
      element={<DayTwelve/>}
    />
    <Route
      path="/day13"
      element={<DayThirteen/>}
    />
    <Route
      path="/"
      element={<Home/>}
    />
  </Routes>
)
