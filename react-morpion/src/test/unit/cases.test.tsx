import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Cases from '../../components/cases/Cases';

describe('Cases Component', () => {
  test('renders correctly and calls click handler when clicked', () => {
    const mock =  jest.fn(); 
    const testId = 'a';
    render(<Cases id={testId} click={mock} />);
    const caseElement = screen.getByTestId(testId); 
    expect(caseElement).toBeInTheDocument();
    fireEvent.click(caseElement);
    expect(mock).toHaveBeenCalledTimes(1);
    
  });
});

