import { shallow } from 'enzyme';
import React from 'react';

import UserList from './UserList';

describe('UserList', () => {
  describe('when there is no users to chat', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(<UserList />);
  
      // Then
      expect(wrapper.text()).toContain('no users');
    });
  });

  describe('when there are users to chat', () => {
    it('renders users', () => {
      // Given
      const wrapper = shallow(<UserList />);
      const usernames = ['Alan', 'Kevin', 'Jay'];
  
      // When
      wrapper.setState({ usernames });
  
      // Then
      expect(wrapper.find('button').length).toBe(usernames.length);
    });
  });
});
