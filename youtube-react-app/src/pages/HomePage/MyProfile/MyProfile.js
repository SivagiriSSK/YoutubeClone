import React, { Component } from 'react';

// two way binding in React
class MyProfile extends Component {
  // JS to JSX
  state = {
    profileName: 'john'
  };

  handleProfileNameChange = (event) => {
    // console.log(this);
    // console.log(event);
    console.log(event.target.value);
    this.setState({
      profileName: event.target.value
    });
  };

  render() {
    return (
      <>
        <h3>Profile Info</h3>
        <p>Update Profile Name :</p>
        <input
          className='mb-3'
          type='text'
          value={this.state.profileName}
          onChange={this.handleProfileNameChange}
        />
        <p>{this.state.profileName}</p>
      </>
    );
  }
}

export default MyProfile;
