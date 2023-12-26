import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  it('has counter with intial value 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    expect(counterValue.textContent).toEqual('0');
    // find the increment button
    const incrementBtn = screen.getByTestId('incrementBtn');
    // trigger the click event on incrementBtn
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toEqual('1');

    // fetch the counter valeu again
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(counterValue.textContent).toEqual('4');
  });

  // it('has counter with intial value 0', () => {
  //   render(<Counter />);
  //   const counterValue = screen.getByTestId('counterValue');
  //   expect(counterValue.textContent).toEqual('0');
  //   // find the increment button
  //   const decrementBtn = screen.getByTestId('decrementBtn');
  //   // trigger the click event on incrementBtn
  //   fireEvent.click(decrementBtn);
  //   expect(counterValue.textContent).toEqual('0');

  //   // fetch the counter valeu again
  //   fireEvent.click(decrementBtn);
  //   fireEvent.click(decrementBtn);
  //   fireEvent.click(decrementBtn);
  //   expect(counterValue.textContent).toEqual('-4');
  // });

  it('has counter with max value of 10 ', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');
    // if we fire a event more than 15 times test should pass
    for (let i = 0; i < 15; i++) {
      console.log('count' + i);
      fireEvent.click(incrementBtn);
    }
    expect(counterValue.textContent).toEqual('10');
  });

  it('has counter with less than 0', () => {
    render(<Counter />);
    const counterValue = screen.getByTestId('counterValue');
    const incrementBtn = screen.getByTestId('incrementBtn');
    const decrementBtn = screen.getByTestId('decrementBtn');

    expect(counterValue.textContent).toEqual('0');
    for (let j = 0; j < 10; j++) {
      fireEvent.click(incrementBtn);
    }
    expect(counterValue.textContent).toEqual('10');

    // if we fire a decrement event more than 15 times even test will pass
    for (let i = 0; i < 10; i++) {
      console.log('count' + i);
      fireEvent.click(decrementBtn);
    }
    // decrement 11th time
    fireEvent.click(decrementBtn);
    expect(counterValue.textContent).toEqual('0');
  });
});
