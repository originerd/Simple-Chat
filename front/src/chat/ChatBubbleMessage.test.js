import { shallow } from 'enzyme';
import React from 'react';

import ChatBubbleMessage from './ChatBubbleMessage';

describe('ChatBubbleMessage', () => {
  describe('when the message type is text', () => {
    it('renders text message', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubbleMessage isMine message={message} type="text" />);

      // Then
      expect(wrapper.find('p').text()).toBe(message);
    });
  });

  describe('when the message type is image', () => {
    it('renders image message', () => {
      // When
      const message = "TestMessage";
      const wrapper = shallow(<ChatBubbleMessage isMine message={message} type="image" />);

      // Then
      expect(wrapper.find('img').length).toBe(1);
    });
  });
});
