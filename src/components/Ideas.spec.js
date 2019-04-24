import { shallow } from 'enzyme'
import { expect } from 'chai'

import React from 'react'

import Idea from './Idea'
import { Ideas } from './Ideas'

describe('Ideas', () => {
  it('Should render as much Ideas as in the array in "content" props', () => {
    // Given
    const firstIdeaTitle = 'Dummy title 1'
    const ideas = [
      { id: 1, title: firstIdeaTitle, body: 'Dummy body 1' },
      { id: 2, title: 'Dummy title 2', body: 'Dummy body 2' },
    ]

    // When
    const wrapper = shallow(<Ideas ideas={{ list: ideas }} />)

    // Then
    expect(wrapper.find(Idea)).to.have.lengthOf(2)
  })
})
