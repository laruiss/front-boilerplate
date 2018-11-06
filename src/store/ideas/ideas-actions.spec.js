import { expect } from 'chai'

import {
  IDEA_FETCH_FAILURE,
  IDEA_FETCH_REQUEST,
  IDEA_FETCH_SUCCESS,
  requestIdea,
  setIdeasError,
  setIdea,
} from './ideas-actions'

const expectedIdea = {
  id: '1',
  title: 'Foo',
  body: 'Bar',
}

describe('idea-actions', () => {
  it('Should return a simple request action', () => {
    const actualAction = requestIdea(expectedIdea)
    expect(actualAction.type).to.eql(IDEA_FETCH_REQUEST)
    expect(actualAction.payload.idea).to.eql(expectedIdea)
  })

  it('Should return a failure action', () => {
    const expectedType = IDEA_FETCH_FAILURE

    const actualAction = setIdeasError(expectedType, expectedIdea)

    expect(actualAction.type).to.eql(expectedType)
    expect(actualAction.payload.idea).to.eql(expectedIdea)
  })

  it('Should return a success action', () => {
    const actualAction = setIdea(expectedIdea)

    expect(actualAction.type).to.eql(IDEA_FETCH_SUCCESS)
    expect(actualAction.payload.idea).to.eql(expectedIdea)
  })
})
