import { shallow } from 'enzyme';
import React from 'react';

import App from './App';
import SignIn from './SignIn';
import Chat from './Chat';

describe('App', () => {
  describe('when username is not set', () => {
    it('renders SignIn', () => {
      // When
      const wrapper = shallow(<App />);

      // Then
      expect(wrapper.find(Chat).length).toBe(0);
      expect(wrapper.find(SignIn).length).toBe(1);
    });
  });

  describe('when username is set', () => {
    it('renders Chat', () => {
      // Given
      const wrapper = shallow(<App />);
      const username = 'Jitae Kim';

      // When
      wrapper.setState({ username });

      // Then
      expect(wrapper.find(Chat).length).toBe(1);
      expect(wrapper.find(SignIn).length).toBe(0);
    });
  });
});
