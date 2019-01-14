import { shallow } from 'enzyme';
import React from 'react';

import ChatRoom from './ChatRoom';

describe('ChatRoom', () => {
  it('renders an input', () => {
    // When
    const wrapper = shallow(<ChatRoom />);

    // Then
    expect(wrapper.find('input').length).toBe(1);
  });

  it('renders a chat bubble container', () => {
    // When
    const wrapper = shallow(<ChatRoom />);

    // Then
    expect(wrapper.find('.chat-bubble-container').length).toBe(1);
  });
});
