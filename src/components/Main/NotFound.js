import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => (
  <div className="oops">
    <h1>Oops!  You Got Lost!</h1>
    <Link to="/">
      <h3>Go Home</h3>
    </Link>
  </div>
);

export default NotFound;
