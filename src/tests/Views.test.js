import {render, screen} from '@testing-library/react';
import {act} from "react-dom/test-utils";
import React from 'react';
import Overview from '../views/Overview';
import './testsSetup';
import axios from 'axios';
import Profile from "../views/Profile";
import CompareList from "../views/CompareList";
import Activity from "../views/Activity";
import {fakeActivities, fakeActivityData, fakePersonData} from "./testsFakeData";

/**
 * Mock maps component because rendering is not possible in test environment
 */
jest.mock('../components/MapsCard', () => {
  return function Map() {
    return (<div/>);
  }
})

test('Activities page', () => {
  const title = 'This is an activity';
  const testData = fakeActivities(title);
  window.$session.set('activities', testData);

  render(<Overview/>);
  const mainTitle = screen.getByText(/activities/i);
  expect(mainTitle).toBeInTheDocument();

  const activityTitles = screen.getAllByText(title);
  expect(activityTitles.length).toEqual(2)
});

test('Profile page', async () => {
  window.$session.set('athlete', fakePersonData.athlete)
  jest.spyOn(axios, 'request').mockImplementationOnce(() =>
    Promise.resolve({
      data: fakePersonData.athlete
    })
  );
  jest.spyOn(axios, 'request').mockImplementationOnce(() =>
    Promise.resolve({
      data: fakePersonData.stats
    })
  );
  let baseElement;
  await act(async () => {
    const test = render(<Profile/>);
    baseElement = test.baseElement;
  })
  expect(baseElement.querySelector(".profile-stats .statistic h3").textContent).toBe("29");
});

test('CompareList page', async () => {
  const title = "Fake activity"
  window.$session.set('compare', fakeActivities(title))
  jest.spyOn(axios, 'request').mockImplementation(() =>
    Promise.resolve({
      data: fakeActivityData
    })
  );
  await act(async () => {
    render(<CompareList/>);
  });


});

test('Activity page', async () => {

  jest.spyOn(axios, 'request').mockImplementation(() =>
    Promise.resolve({
      data: fakeActivityData
    })
  );

  let baseElement;
  await act(async () => {
    const t = render(<Activity id="1"/>);
    baseElement = t.baseElement
    let text = screen.getByText(/Getting activity data/i);
    expect(text).toBeInTheDocument();
  });

  let text = baseElement.querySelector(".activity-stats div h3").textContent;
  expect(text).toBe("11.9 km/h");
});