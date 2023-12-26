// error boundary should be class comp
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  state = {
    hasError: false
  };

  // let's catch the error
  // when there is a runtime error -- this method will be called automatically
  // it receives the error that was thrown as a param
  // this method must return a value to update state
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      hasError: true
    };
  }

  // lifecycle hook
  // only when a runtime error occurs -- this method will be be called
  componentDidCatch(error, errorInfo) {
    console.log('🚀 ~ file: ErrorBoundary.js:24 ~ ErrorBoundary ~ componentDidCatch:');
    console.log(error); // the error in original source
    console.log(errorInfo); // the error in compiled bundle.js
    // you can also log these error in third party tools.
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='alert alert-danger'>
          <h1>Some Error Occurred!</h1>
          <p>Try again later. If the error persists contact the Admin</p>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element
};

export default ErrorBoundary;
