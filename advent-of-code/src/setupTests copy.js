import 'core-js';
import React from 'react';
import 'jest-styled-components';
import fetch from 'jest-fetch-mock';
import { light } from './theme/theme';
import { StaticRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure, shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

const shallowStaticRouter = node =>
  shallow(<StaticRouter>{node}</StaticRouter>);
const mountStaticRouter = node => mount(<StaticRouter>{node}</StaticRouter>);

const mountThemeWrapper = (node, theme = light) => {
  return mount(<ThemeProvider theme={theme}>{node}</ThemeProvider>);
};

const shallowThemeWrapper = (node, theme = light) => {
  return shallow(<ThemeProvider theme={theme}>{node}</ThemeProvider>);
};

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
['requestFullscreen', 'exitFullscreen'].forEach(
  each => (document[each] = () => {})
);

const window = {
  matchMedia: jest.fn()
};

global.localStorage = localStorageMock;
global.React = React;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.shallowStaticRouter = shallowStaticRouter;
global.mountStaticRouter = mountStaticRouter;
global.mountThemeWrapper = mountThemeWrapper;
global.shallowThemeWrapper = shallowThemeWrapper;
global.fetch = fetch;
global.i18n = { t: key => key };
global.window = window
