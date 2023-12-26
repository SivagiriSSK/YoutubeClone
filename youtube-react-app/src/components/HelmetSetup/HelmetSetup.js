import React from 'react';
import { Helmet } from 'react-helmet';
import { HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const HelmetSetup = ({ title }) => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
    </HelmetProvider>
  );
};

HelmetSetup.propTypes = {
  title: PropTypes.string
};

export default HelmetSetup;
