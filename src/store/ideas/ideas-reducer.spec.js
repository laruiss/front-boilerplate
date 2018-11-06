import ideasReducer from './ideas-reducer'
import { expect } from 'chai'

import { IDEAS_FETCH_SUCCESS, IDEAS_FETCH_FAILURE } from './ideas-actions'

describe('ideas-reducer', () => {
  it('Should return a state with one idea', () => {
    const action = {
      type: IDEAS_FETCH_SUCCESS,
      payload: {
        ideas: [{ id: '1', title: 'Foo', body: 'Bar' }],
      },
    }
    const newState = ideasReducer(undefined, action)
    expect(newState).to.haveOwnProperty('ideas')
    expect(newState.ideas.list.length).to.eql(1)
  })

  it('Should return a state with no idea', () => {
    const action = {
      type: IDEAS_FETCH_FAILURE,
      payload: {
        ideas: { id: '1', title: 'Foo', body: 'Bar' },
      },
    }
    const newState = ideasReducer(undefined, action)
    expect(newState).to.haveOwnProperty('ideas')
    expect(newState.ideas.isLoading).to.eql(false)
  })
})
