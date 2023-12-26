import React, { Component } from 'react';

export class LifeCycle extends Component {
  constructor() {
    console.log('=======1.Constructor() called=========');
    // ideal place for your initial component-wide data
    super();
    this.state = {
      isLoading: true,
      isError: false,
      featureName: ''
    };
  }

  // LifeCycle hook - componentDidMount
  componentDidMount() {
    console.log('=====3. Inside ComponentDidMount()=======');
    // this method will be executed only once after render()
    // this method will be called when the comp's UI comes into view
    // this is the ideal place for you to send REST API Calls
    setTimeout(() => {
      console.log('setTimeout Executed');
      // this.setState({
      //   isLoading: false,
      //   isError: false,
      //   featureName: "",
      // });

      // upon getting error from response
      this.setState({
        isLoading: false,
        isError: false,
        featureName: ''
      });
    }, 2000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // when the state is updated -- this will be called
    // is invoked before rendering an already mounted component when new props or state are being received
    // it must return either true or false
    console.log('===4.shouldComponentUpdate called===');
    // compare the previous state (this.state ) and new state (nextState)
    console.log(this.state);
    console.log(nextState);
    if (
      this.state.isLoading !== nextState.isLoading ||
      this.state.isError !== nextState.isError ||
      this.state.featureName !== nextState.featureName
    ) {
      console.log('shouldComponent returned true');
      return true;
    } else {
      console.log('shouldComponent returned false');
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('6.Inside componentDidUpdate');
    // called immediately after the update in JSX (after- re-rendering)
    // will never be called after initial rendering
    console.log(prevProps); // prevProps contains props before update
    console.log(prevState); // prevState contains state before update
    console.log(this.state); // this is the next state
    console.log(this.props); // this is the next props
    // this is ideal for tiny dom manipulations like style updates
    const myPara = document.getElementById('myPara');
    myPara.style.color = 'green';
  }

  render() {
    console.log('=====2 & 4.Inside render()======');
    // if isLoading true this condition executed
    if (this.state.isLoading) {
      return <div className='spinner-border text-success'></div>;
    }

    // if isError become true this condition executed
    if (this.state.isError) {
      return <div className='alert alert-danger'>OOps, Some Error Occurred! try again later</div>;
    }

    return <h3 id='myPara'>LifeCycle Detail Explanation </h3>;
  }
}

export default LifeCycle;
