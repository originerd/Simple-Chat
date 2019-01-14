import { shallow } from 'enzyme';
import React from 'react';

import ChatRoom from './ChatRoom';

describe('ChatRoom', () => {
  describe('when selected chat room exists', () => {
    it('renders an image upload button', () => {
      // When
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          sendMessage={() => undefined}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // Then
      expect(wrapper.find('.chat-room__image-input').length).toBe(1);
    });

    it('renders an input', () => {
      // When
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          sendMessage={() => undefined}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // Then
      expect(wrapper.find('.chat-room__text-input').length).toBe(1);
    });

    it('renders a chat bubble container', () => {
      // When
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          sendMessage={() => undefined}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // Then
      expect(wrapper.find('.chat-room__bubbles').length).toBe(1);
    });

    it('renders chat bubbles with a chat bubble container', () => {
      // Given
      const currentUsername = 'Jitae Kim';
      const theOtherUsername = 'Originerd';
      const messages = [
        { from: currentUsername, message: 'Hey!', type: "text" },
        { from: theOtherUsername, message: 'Yo!', type: "text" },
      ];

      // When
      const wrapper = shallow(
        <ChatRoom
          messages={messages}
          sendMessage={() => undefined}
          to={theOtherUsername}
          username={currentUsername}
        />,
      );

      // Then
      const chatBubbleContainer = wrapper.find('.chat-room__bubbles');
      expect(chatBubbleContainer.length).toBe(1);
      expect(chatBubbleContainer.find('ChatBubble').at(0).prop('isMine')).toBe(true);
      expect(chatBubbleContainer.find('ChatBubble').at(0).prop('message')).toBe(messages[0].message);
      expect(chatBubbleContainer.find('ChatBubble').at(1).prop('isMine')).not.toBe(true);
      expect(chatBubbleContainer.find('ChatBubble').at(1).prop('message')).toBe(messages[1].message);
    });

    it('sets message when input is changed', () => {
      // Given
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          sendMessage={() => undefined}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // When
      const message = 'TestMessage';
      wrapper.find('.chat-room__text-input').simulate('change', { target: { value: message } });

      // Then
      expect(wrapper.state('message')).toBe(message);
    });

    it('sends message when pressing enter key', () => {
      // Given
      const sendMessageMockFn = jest.fn();
      const wrapper = shallow(
        <ChatRoom
          messages={[]}
          sendMessage={sendMessageMockFn}
          to="Originerd"
          username="Jitae Kim"
        />,
      );

      // When
      const message = 'TestMessage';
      wrapper.find('.chat-room__text-input').simulate('change', { target: { value: message } });
      wrapper.find('.chat-room__text-input').simulate('keypress', { key: 'Enter' });

      // Then
      expect(sendMessageMockFn).toBeCalledWith(message);
      expect(wrapper.state('message')).toBe('');
    });
  });

  describe('when selected chat room exists', () => {
    it('renders empty message', () => {
      // When
      const wrapper = shallow(<ChatRoom sendMessage={() => undefined} username="Jitae Kim" />);

      // Then
      expect(wrapper.text()).toContain('select a user to chat');
    });
  });
});
