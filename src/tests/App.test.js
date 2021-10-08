import { render, screen } from '@testing-library/react';
import App from "../App";
import React from "react";
import './testsSetup'

jest.mock('../components/MapsCard', () => {
  return function Map() {
    return (<div/>);
  }
})

/**
 * Tests the app as a whole
 * Router functions included
 */
test('Should not be logged in', () => {

  render(<App ref={window.$app} />);
  const linkElement = screen.getByText(/Login with Strava/i);
  expect(linkElement).toBeInTheDocument();
});





