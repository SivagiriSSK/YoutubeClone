import React, { Component } from 'react';
import axios from 'axios';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

export class ContactUsPage extends Component {
  state = {
    fullName: '',
    email: '',
    phone: '',
    query: '',
    isSaved: false,
    isError: false
  };

  searchInput = React.createRef();

  handleChange = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = (event) => {
    console.log('Submitted');
    // stopping the page refresh
    event.preventDefault();
    // read the form data
    console.log(this.state);
    // sent the above form dta to the back end
    // get the response from the backend and display it in UI
    axios
      .post('https://jsonplaceholder.typicode.com/users', this.state)
      .then((res) => {
        console.log(res);
        if (res.data && res.data.id) {
          this.setState({
            isSaved: true
          });
        }
      })
      .catch((err) => {
        console.log(err);
        this.setState({
          isError: true
        });
      })
      .finally(() => {
        console.log('It is over!');
      });
  };

  handleSearch = (event) => {
    event.preventDefault();
    console.log(this.searchInput.current.value);
  };

  render() {
    return (
      <>
        <HelmetSetup title='Contact Us ' />

        <div className='row justify-content-center'>
          <h1>Contact Us Page</h1>
          <div className='col-md-4'>
            <form onSubmit={this.handleSubmit}>
              <div className='mb-3'>
                <label htmlFor='nameInput' className='form-label'>
                  Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='nameInput'
                  name='fullName'
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='emailInput' className='form-label'>
                  Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='emailInput'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='phoneInput' className='form-label'>
                  Phone
                </label>
                <input
                  type='tel'
                  className='form-control'
                  id='phoneInput'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='queryInput' className='form-label'>
                  Query / Suggestions / Feedback
                </label>
                <textarea
                  className='form-control'
                  id='queryInput'
                  rows='4'
                  name='query'
                  value={this.state.query}
                  onChange={this.handleChange}
                />
              </div>
              <button
                type='submit'
                className='btn btn-primary'
                data-testid='submitBtn'
                disabled={this.state.fullName === ''}>
                Send
              </button>
              {this.state.isSaved ? (
                <div className='alert alert-success' data-testid='saveText'>
                  Saved Successfully
                </div>
              ) : (
                ''
              )}
              {this.state.isError ? (
                <div className='alert alert-danger'>Some Error Occurred. Try again Later!</div>
              ) : (
                ''
              )}
            </form>
          </div>
        </div>
        <div className='row justify-content-center'>
          <h2>Uncontrolled Components Demo in form inputs</h2>
          <div className='col-md-4'>
            <form onSubmit={this.handleSearch}>
              <div className='mb-3'>
                <label htmlFor='searchInput' className='form-label'>
                  Search Query:
                </label>
                <input
                  type='text'
                  id='searchInput'
                  placeholder='Enter Search Query'
                  className='form-control'
                  ref={this.searchInput}
                />
              </div>
              <input type='submit' value='Search' className='btn btn-info' />
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUsPage;
