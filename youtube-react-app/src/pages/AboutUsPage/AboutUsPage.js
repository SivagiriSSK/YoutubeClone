import React, { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import { PageContext } from '../../contexts/PageContext';

const AboutUsPage = () => {
  const userStatus = useContext(PageContext);
  console.log(userStatus);

  console.log(userStatus);
  <h2>About Us Page</h2>;
  return (
    <>
      <HelmetSetup title='About Us' />

      <div className='about us-nav'>
        <Link to='about-me' class='link-primary m-5'>
          <span className='h3'>About Me</span>
        </Link>
        <Link to='customer-care' class='link-primary m-5'>
          <span className='h3'>Customer Care</span>
        </Link>
      </div>
      <Outlet />
      <hr />
      <h2>Data Received via Page context using Context API</h2>
      <p>Logged In Status: {userStatus.isLoggedIn ? 'Logged In' : 'Not Logged In'}</p>
      <p>Last Login: {userStatus.lastLogin}</p>
    </>
  );
};

export default AboutUsPage;
