import React from 'react';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import Blog from './Blog/Blog';
import MyAccount from './MyAccount/MyAccount';
import TodosVariant1 from './TodosVariant1/TodosVariant1';
import TodosVariant2 from './TodosVariant2/TodosVariant2';

const HooksDemoPage = () => {
  return (
    <>
      <HelmetSetup title='Hooks Demo' />

      <div>HooksDemoPage</div>
      <MyAccount />

      <hr />
      <Blog />

      <hr />
      <h2 className='mb-2'>useRef() and useState() | Hooks Demo</h2>
      <TodosVariant1 />

      <hr />
      <h2 className='mb-2'>useRef() and useReducer() | Hooks Demo</h2>
      <TodosVariant2 />
    </>
  );
};

export default HooksDemoPage;
