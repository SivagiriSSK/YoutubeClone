import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CompanyInfo = ({ foundedYear, headquarter }) => {
  const [countryName, setCountryName] = useState('USA');
  return (
    <div>
      <div>Company Info</div>
      <h3 data-testid='companyName'>Company Name: Cognizant</h3>
      <p data-testid='foundedYear' style={{ color: 'rgb(0, 255, 0)', backgroundColor: 'black' }}>
        Founded in: {foundedYear}
      </p>
      <p data-testid='headquarter'>Headquarter: {headquarter}</p>
      <button data-testid='joinCognizant' className='btn btn-primary'>
        JOIN COGNIZANT
      </button>
      <hr />
      <input
        type='text'
        placeholder='Enter Your Country Name!'
        value={countryName}
        onChange={(event) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid='visitWebsite'>Please visit Cognizant {countryName} Website</p>
    </div>
  );
};

CompanyInfo.propTypes = {
  foundedYear: PropTypes.string,
  headquarter: PropTypes.string
};

export default CompanyInfo;
