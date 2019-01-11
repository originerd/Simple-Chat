import { shallow } from 'enzyme';
import React from 'react';

import App from './App';
import SignIn from './SignIn';

describe('App', () => {
  it('renders SignIn', () => {
    // When
    const wrapper = shallow(<App />);

    // Then
    expect(wrapper.find(SignIn).length).toBe(1);
  });
});
