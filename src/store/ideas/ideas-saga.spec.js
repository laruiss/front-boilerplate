import { call, put } from 'redux-saga/effects'

import { fetchIdeaRequest, saveIdeaRequest } from './ideas-saga'
import {
  IDEA_SAVE_REQUEST,
  IDEA_FETCH_SUCCESS,
  IDEA_SAVE_SUCCESS,
} from './ideas-actions'
import { retrieveIdea } from '@/api/ideas'

jest.mock('@/api/ideas')

describe('ideas-saga', () => {
  it('Should get idea with same id and dispatch a success action', () => {
    const expectedIdeaId = '1'

    const fetchIdeaIt = fetchIdeaRequest({
      payload: { id: expectedIdeaId },
    })

    const actualIdea = fetchIdeaIt.next().value
    expect(actualIdea).toEqual(call(retrieveIdea, expectedIdeaId))

    const successAction = fetchIdeaIt.next(actualIdea).value
    expect(successAction).toEqual(
      put({
        type: IDEA_FETCH_SUCCESS,
        payload: {
          idea: actualIdea,
        },
      })
    )
  })

  it('Should save an idea', () => {
    const title = 'Foo'
    const body = 'Bar'
    const id = '1'
    const idea = { id, title, body }

    const ideasSaveIt = saveIdeaRequest({
      type: IDEA_SAVE_REQUEST,
      payload: { idea },
    })
    ideasSaveIt.next() // delay
    const actualIdea = ideasSaveIt.next().value // save

    const successAction = ideasSaveIt.next(actualIdea).value // put(action)

    expect(successAction).toEqual(
      put({
        type: IDEA_SAVE_SUCCESS,
        payload: {
          idea: actualIdea,
        },
      })
    )
  })
})
