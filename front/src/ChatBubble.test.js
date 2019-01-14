import { shallow } from 'enzyme';
import React from 'react';

import ChatBubble from './ChatBubble';

describe('ChatBubble', () => {
  describe('when the message type is text', () => {
    it('renders a chat bubble with .right if it is sent by current user', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubble isMine message={message} type="text" />);

      // Then
      expect(wrapper.hasClass('left')).toBe(false);
      expect(wrapper.hasClass('right')).toBe(true);
      expect(wrapper.find('p').text()).toBe(message);
    });

    it('renders a chat bubble with .left if it is sent by the other user', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubble message={message} type="text" />);

      // Then
      expect(wrapper.hasClass('left')).toBe(true);
      expect(wrapper.hasClass('right')).toBe(false);
      expect(wrapper.find('p').text()).toBe(message);
    });
  });

  describe('when the message type is image', () => {
    it('renders a chat bubble with .right if it is sent by current user', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubble isMine message={message} type="image" />);

      // Then
      expect(wrapper.hasClass('left')).toBe(false);
      expect(wrapper.hasClass('right')).toBe(true);
      expect(wrapper.find('img').length).toBe(1);
    });

    it('renders a chat bubble with .left if it is sent by the other user', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubble message={message} type="image" />);

      // Then
      expect(wrapper.hasClass('left')).toBe(true);
      expect(wrapper.hasClass('right')).toBe(false);
      expect(wrapper.find('img').length).toBe(1);
    });
  });
});
