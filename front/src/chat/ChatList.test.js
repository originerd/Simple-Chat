import { shallow } from 'enzyme';
import React from 'react';

import ChatList from './ChatList';

describe('ChatList', () => {
  describe('when there are no usernames to chat', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(
        <ChatList
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
    it('renders ChatButtons', () => {
      // When
      const usernames = ['Alan', 'Kevin', 'Jay'];
      const wrapper = shallow(
        <ChatList
          chatRoomToUnreadMessageCount={{}}
          resetUnreadMessageCount={() => undefined}
          selectChatRoom={() => undefined}
          usernames={usernames}
        />,
      );

      // Then
      expect(wrapper.find('ChatButtons').length).toBe(1);
    });
  });
});
