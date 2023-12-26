import { fireEvent, render, screen } from '@testing-library/react';
import CompanyInfo from './CompanyInfo';
import renderer from 'react-test-renderer';

describe('CompanyInfo', () => {
  // test spec
  // if it is xit('has Cognizant as company name') like this this test case will skipped
  it('has Cognizant as company name', () => {
    // Act
    render(<CompanyInfo />);
    const companyName = screen.getByTestId('companyName');
    console.log(companyName.textContent);
    // Assert
    expect(companyName.textContent).toBe('Company Name: Cognizant');
  });

  // testing props - must
  it('receives foundedYear prop and displays in JSX', () => {
    render(<CompanyInfo foundedYear='2000' />);
    const foundedYear = screen.getByTestId('foundedYear');
    expect(foundedYear).toHaveTextContent('Founded in: 2000');
  });

  // testing companyInfo props
  it('receives headquarter prop and displays in JSX', () => {
    render(<CompanyInfo headquarter='Teaneck' />);
    const headquarter = screen.getByTestId('headquarter');
    expect(headquarter).toHaveTextContent('Teaneck');
  });

  // testing inline styles
  it('has foundedYear with text color green --inline styles', () => {
    render(<CompanyInfo foundedYear='2022' />);
    const foundedYear = screen.getByTestId('foundedYear');
    // recommended to use color code in hexa or rgb -- not the color name like green
    expect(foundedYear).toHaveStyle('color: #00ff00');
  });

  // testing class having or not
  it("has class with 'btn btn-primary' and text with 'JOIN COGNIZANT'", () => {
    render(<CompanyInfo />);
    const joinCognizant = screen.getByTestId('joinCognizant');
    expect(joinCognizant).toHaveClass('btn btn-primary');
    expect(joinCognizant).toHaveTextContent('JOIN COGNIZANT');
  });

  it('has an input with `Enter Your Country Name!` as Placeholder', () => {
    render(<CompanyInfo />);
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name!');
    expect(countryInput).toBeTruthy();
  });

  it('displays countryName USA by default and updates JSX onChange of country input', () => {
    render(<CompanyInfo />);
    // finding input element
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name!');
    console.log(countryInput.value);
    expect(countryInput.value).toBe('USA');

    // now checking whether the onChange event handler is working or not
    // setting up mock event obj
    const mockEventObj = {
      target: {
        value: 'UK'
      }
    };

    // as the comp is rendered in test runner we can't use mouse or keyboard as input devices\
    // so, lets trigger the event ththru prohram
    fireEvent.change(countryInput, mockEventObj);
    // finally let's check if the input element is showing the change
    expect(countryInput.value).toBe('UK');

    expect(screen.getByTestId('visitWebsite')).toHaveTextContent(
      'Please visit Cognizant UK Website'
    );
  });

  it('has right snapshot with all requirments completed', () => {
    // to take snapshot we need a react-test-renderer // npm i react-test-renderer -D
    // taking snapshot and converting it into JSON
    // [RECOMMENDED]: Take snapshot with all possible props as well as props children
    const snapshotInJson = renderer
      .create(<CompanyInfo foundedYear='2000' headQuarters='Teaneck' />)
      .toJSON();
    // let's assert with toMatchSnapshot();
    expect(snapshotInJson).toMatchSnapshot();
  });
});
