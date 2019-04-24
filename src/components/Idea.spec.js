import { expect } from 'chai'
import { mount } from 'enzyme'

import React from 'react'

import { Idea } from './Idea'

describe('Idea', () => {
  it('Should render a component with an input and a paragraph', () => {
    // Given
    const title = 'The title'
    const body = 'The body'

    // When
    const wrapper = mount(<Idea title={title} body={body} />)

    // Then
    expect(wrapper.find('div input')).to.have.lengthOf(1)
    expect(
      wrapper
        .find('div input')
        .first()
        .prop('value')
    ).to.eql(title)

    expect(wrapper.find('div textarea')).to.have.lengthOf(1)
    expect(wrapper.find('div textarea').text()).to.eql(body)
  })
})
