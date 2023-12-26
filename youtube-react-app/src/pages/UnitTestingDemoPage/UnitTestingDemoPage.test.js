import { render, screen } from '@testing-library/react';
import UnitTestingDemoPage from './UnitTestingDemoPage';

// TEST PATTERN: AAA

// TEST SUITE = group of related test cases
describe('UnitTestingDemoPage', () => {
  // test case or test spec
  it("has heading with text 'Unit Testing Demo Page'", () => {
    // Act
    render(<UnitTestingDemoPage />);
    const heading = screen.getByText('Unit Testing Demo Page');
    // Assert
    expect(heading).toBeInTheDocument();
  });

  it("has a link with text 'Unit Testing reference'", () => {
    render(<UnitTestingDemoPage />);
    // using regex to find text with case insensitive
    const link = screen.getByText(/unit Testing reference/i);
    expect(link).toBeTruthy();
  });
});
