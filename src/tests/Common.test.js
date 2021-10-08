import { render, screen } from '@testing-library/react';
import './testsSetup';

test('Activity', () => {
  const Activity = require('../common/Activity').default;

  // Speed of 10 m/s
  const fetched = [0, 'Name', (new Date(0)).toUTCString(), 10, 10, 10, 1];
  const activity = new Activity(...fetched);

  expect(activity.date).toBe("1/1/1970 01:00");

  // Parse different types of speed calculations
  expect(activity.getSpeed()).toBe("1:40");
  expect(activity.getSpeed(false)).toBe("36 km/h");

  window.$session.set('settings', { units: 'imperial' })

  expect(activity.getSpeed()).toBe("2:40");
  expect(activity.getSpeed(false)).toBe("22.4 mph");

  // The storable test data needs to be the same as the generated stored
  expect(activity.storable).toEqual(fetched)
});

test('Convert', () => {
  const Convert = require('../common/Convert').default;

  expect(Convert.distance(2000)).toBe(1.2); // Meters to miles conversion
  expect(Convert.time(3600)).toBe('1:00:00'); // seconds to display time
});

