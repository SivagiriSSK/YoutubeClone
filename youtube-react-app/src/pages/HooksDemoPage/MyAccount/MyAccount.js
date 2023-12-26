import React, { useState } from 'react';

const MyAccount = () => {
  console.log('Program Started');
  // Returns a stateful value, and a function to update it
  const [myName, setMyName] = useState('Ajith');
  const [age, setAge] = useState(20);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleChangeName = () => {
    console.log('Change Name Btn Clicked');
    setMyName('Suresh Raina'); // updating the new Name
  };

  console.log('Program Ended');
  return (
    <div>
      <h3>MyAccount</h3>
      <p>Name: {myName}</p>
      <button type='button' onClick={handleChangeName}>
        Change Name
      </button>

      <p>Age: {age}</p>
      <button
        type='button'
        onClick={() => {
          setAge(30);
        }}>
        Update Age
      </button>
      <hr />

      <button
        type='button'
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}>
        {isLoggedIn ? 'Log out' : 'Login'}
      </button>
    </div>
  );
};

export default MyAccount;
