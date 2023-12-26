// import React from "react";
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const MenuItem = ({ url, title }) => {
  console.log(url, title);
  return (
    <li className='nav-item'>
      <NavLink to={url} className='nav-link'>
        {title}
      </NavLink>
    </li>
  );
};

MenuItem.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string
};

export default MenuItem;
