import { shallow } from 'enzyme';
import React from 'react';

import Chat from './Chat';

describe('Chat', () => {
  describe('when there are no usernames to chat', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(<Chat username="Jitae Kim" />);

      // Then
      expect(wrapper.text()).toContain('no users');
    });
  });

  describe('when there are usernames to chat', () => {
    it('renders buttons', () => {
      // Given
      const wrapper = shallow(<Chat username="Jitae Kim" />);
      const usernames = ['Alan', 'Kevin', 'Jay'];

      // When
      wrapper.setState({ usernames });

      // Then
      expect(wrapper.find('button').length).toBe(usernames.length);
    });
  });
});
