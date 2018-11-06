import { mount } from 'enzyme'

import React from 'react'

import Button from './Button'

describe('Button', () => {
  it('Should invoke onClick when clicked', () => {
    // Given
    const onClick = jest.fn()

    // When
    const wrapper = mount(<Button onClick={onClick} />)
    wrapper.simulate('click')

    // Then
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
