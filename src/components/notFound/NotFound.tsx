import React from 'react';
import './NotFound.css';
import logo from '../../assets/images/logo.png';

function NotFound(): JSX.Element {
  return (
    <div className="notFound">
      <img src={logo} alt="covid" />
      <h1>404</h1>
      <h2>Page Not Found</h2>
    </div>
  );
}

export default NotFound;
