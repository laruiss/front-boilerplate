import { shallow } from 'enzyme'
import { expect } from 'chai'

import React from 'react'

import { App } from '@/App'

describe('App', () => {
  it('Should render an App component', () => {
    const wrapper = shallow(<App requestIdeaList={() => {}} />)

    expect(wrapper.find('div'))
      .to.have.property('length')
      .and.to.equal(1)
  })
})
