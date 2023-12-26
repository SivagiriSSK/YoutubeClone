import React from 'react';
import CompanyInfo from './CompanyInfo/CompanyInfo';
import Counter from './Counter/Counter';
import Posts from './Posts/Posts';
import Users from './Users/Users';

const UnitTestingDemoPage = () => {
  return (
    <div>
      <div>Unit Testing Demo Page</div>
      <a href='https://react.dev/learn'>Unit Testing Reference</a>
      <hr />
      <CompanyInfo foundedYear='1994' headquarter='Teaneck' />
      <Counter></Counter>
      <hr />
      <Users />
      <hr />
      <Posts></Posts>
    </div>
  );
};

export default UnitTestingDemoPage;
