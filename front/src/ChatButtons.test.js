import { shallow } from 'enzyme';
import React from 'react';

import ChatButtons from './ChatButtons';

describe('ChatButtons', () => {
  describe('when there are no usernames to chat', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(
        <ChatButtons
          chatRoomToUnreadMessageCount={{}}
          resetUnreadMessageCount={() => undefined}
          selectChatRoom={() => undefined}
          usernames={[]}
        />,
      );

      // Then
      expect(wrapper.text()).toContain('no users');
    });
  });

  describe('when there are usernames to chat', () => {
    it('renders buttons', () => {
      // When
      const usernames = ['Alan', 'Kevin', 'Jay'];
      const wrapper = shallow(
        <ChatButtons
          chatRoomToUnreadMessageCount={{}}
          resetUnreadMessageCount={() => undefined}
          selectChatRoom={() => undefined}
          usernames={usernames}
        />,
      );

      // Then
      expect(wrapper.find('button').length).toBe(usernames.length);
    });
  });

  describe('when clicking a button', () => {
    it('calls resetUnreadMessageCount function and selectChatRoom function of props', () => {
      // Given
      const resetUnreadMessageCountMockFn = jest.fn();
      const selectChatRoomMockFn = jest.fn();
      const usernames = ['Alan', 'Kevin', 'Jay'];
      const wrapper = shallow(
        <ChatButtons
          chatRoomToUnreadMessageCount={{}}
          resetUnreadMessageCount={resetUnreadMessageCountMockFn}
          selectChatRoom={selectChatRoomMockFn}
          usernames={usernames}
        />,
      );

      // When
      wrapper.find('button').at(0).simulate('click');

      // Then
      expect(resetUnreadMessageCountMockFn).toBeCalledWith(usernames[0]);
      expect(selectChatRoomMockFn).toBeCalledWith(usernames[0]);
    });
  });

  describe('when there are unread messages', () => {
    it('renders a badge', () => {
      // Given
      const usernames = ['Originerd'];
      const unreadMessageCount = 10;
      const chatRoomToUnreadMessageCount = {
        [usernames[0]]: unreadMessageCount,
      };

      // When
      const wrapper = shallow(
        <ChatButtons
          chatRoomToUnreadMessageCount={chatRoomToUnreadMessageCount}
          resetUnreadMessageCount={() => undefined}
          selectChatRoom={() => undefined}
          usernames={usernames}
        />,
      );

      // Then
      expect(wrapper.find('button').find('.badge').text()).toBe(String(unreadMessageCount));
    });
  });
});
