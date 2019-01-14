import { shallow } from 'enzyme';
import React from 'react';

import ChatButtons from './ChatButtons';

describe('ChatButtons', () => {
  describe('when there are no usernames to chat', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(<ChatButtons selectChatRoom={() => undefined} usernames={[]} />);

      // Then
      expect(wrapper.text()).toContain('no users');
    });
  });

  describe('when there are usernames to chat', () => {
    it('renders buttons', () => {
      // When
      const usernames = ['Alan', 'Kevin', 'Jay'];
      const wrapper = shallow(<ChatButtons selectChatRoom={() => undefined} usernames={usernames} />);

      // Then
      expect(wrapper.find('button').length).toBe(usernames.length);
    });
  });

  describe('when clicking a button', () => {
    it('calls selectChatRoom function of props', () => {
      // Given
      const selectChatRoomMockFn = jest.fn();
      const usernames = ['Alan', 'Kevin', 'Jay'];
      const wrapper = shallow(<ChatButtons selectChatRoom={selectChatRoomMockFn} usernames={usernames} />);

      // When
      wrapper.find('button').at(0).simulate('click');

      // Then
      expect(selectChatRoomMockFn).toBeCalledWith(usernames[0]);
    });
  });
});
