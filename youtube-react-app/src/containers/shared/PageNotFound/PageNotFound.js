import React from 'react';
import { Link } from 'react-router-dom';

export const PageNotFound = () => {
  return (
    <div>
      <h2 className='text-muted'>404 Page Not Found.Try again later!</h2>
      <Link to='/' className='link-primary'>
        Back to home page
      </Link>
    </div>
  );
};
