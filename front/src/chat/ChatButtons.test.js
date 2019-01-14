import { shallow } from 'enzyme';
import React from 'react';

import ChatButtons from './ChatButtons';

describe('ChatButtons', () => {
  it('renders buttons with ChatButtonBadges', () => {
    // Given
    const chatRoomToUnreadMessageCount = {
      Alan: 10,
      Kevin: 4,
      Jay: undefined,
    };
    const usernames = Object.keys(chatRoomToUnreadMessageCount);
    const unreadMessageCounts = Object.keys(chatRoomToUnreadMessageCount)
      .map((key) => chatRoomToUnreadMessageCount[key]);

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
    wrapper.find('button').forEach((button, i) => {
      expect(button.text()).toContain(usernames[i]);
    });
    wrapper.find('ChatButtonBadge').forEach((chatButtonBadge, i) => {
      expect(chatButtonBadge.prop('unreadMessageCount')).toBe(unreadMessageCounts[i]);
    });
  });

  describe('clicking a button', () => {
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
});
