import { shallow } from 'enzyme'

import React from 'react'

import { App } from '@/App'

describe('App', () => {
  it('Should render an App component', () => {
    const spy = jest.fn()
    shallow(<App requestIdeaList={spy} />)

    expect(spy).toHaveBeenCalled()
  })
})
