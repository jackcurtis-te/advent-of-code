import React from 'react';
import { StaticRouter } from 'react-router-dom';
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

global.React = React;
global.shallow = shallow;
global.mount = mount;
global.render = render;
global.shallowStaticRouter = shallowStaticRouter;
global.mountStaticRouter = mountStaticRouter;
global.mountThemeWrapper = mountThemeWrapper;
global.shallowThemeWrapper = shallowThemeWrapper;
