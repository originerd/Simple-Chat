import { shallow } from 'enzyme';
import React from 'react';

import ChatButtons from './ChatButtons';

describe('ChatButtons', () => {
  describe('when there are no usernames to chat', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(<ChatButtons usernames={[]} />);

      // Then
      expect(wrapper.text()).toContain('no users');
    });
  });

  describe('when there are usernames to chat', () => {
    it('renders buttons', () => {
      // When
      const usernames = ['Alan', 'Kevin', 'Jay'];
      const wrapper = shallow(<ChatButtons usernames={usernames} />);

      // Then
      expect(wrapper.find('button').length).toBe(usernames.length);
    });
  });
});
