import { shallow } from 'enzyme';
import React from 'react';

import ChatRoom from './ChatRoom';

describe('ChatRoom', () => {
  describe('when selected chat room exists', () => {
    it('renders an input', () => {
      // When
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // Then
      expect(wrapper.find('input').length).toBe(1);
    });

    it('renders a chat bubble container', () => {
      // When
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // Then
      expect(wrapper.find('.chat-bubble-container').length).toBe(1);
    });

    it('renders chat bubbles with a chat bubble container', () => {
      // Given
      const currentUsername = 'Jitae Kim';
      const theOtherUsername = 'Originerd';
      const messages = [
        { from: currentUsername, message: 'Hey!' },
        { from: theOtherUsername, message: 'Yo!' },
      ];

      // When
      const wrapper = shallow(
        <ChatRoom
          messages={messages}
          to={theOtherUsername}
          username={currentUsername}
        />,
      );

      // Then
      const chatBubbleContainer = wrapper.find('.chat-bubble-container');
      expect(chatBubbleContainer.length).toBe(1);
      expect(chatBubbleContainer.find('ChatBubble').at(0).prop('isMine')).toBe(true);
      expect(chatBubbleContainer.find('ChatBubble').at(0).prop('message')).toBe(messages[0].message);
      expect(chatBubbleContainer.find('ChatBubble').at(1).prop('isMine')).not.toBe(true);
      expect(chatBubbleContainer.find('ChatBubble').at(1).prop('message')).toBe(messages[1].message);
    });
  });

  describe('when selected chat room exists', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(<ChatRoom username="Jitae Kim" />);

      // Then
      expect(wrapper.text()).toContain('select a user to chat');
    });
  });
});
