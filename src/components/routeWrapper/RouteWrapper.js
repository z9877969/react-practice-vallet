import React from 'react';
import { Route } from 'react-router-dom';
const RouteWrapper = ({ children, path, ...props }) => {
  const Component = () => children;
  return <Route path={path} render={Component} {...props} />;
};

export default RouteWrapper;
