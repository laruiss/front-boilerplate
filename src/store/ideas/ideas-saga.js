// @flow
import _property from 'lodash.property'
import { delay } from 'redux-saga'
import { call, put, takeLatest } from 'redux-saga/effects'

import {
  createIdea,
  retrieveIdeas,
  retrieveIdea,
  updateIdea,
  deleteIdea,
} from '@/api/ideas'
import {
  IDEAS_FETCH_FAILURE,
  IDEAS_FETCH_REQUEST,
  IDEAS_FETCH_SUCCESS,
  IDEA_FETCH_FAILURE,
  IDEA_FETCH_REQUEST,
  IDEA_FETCH_SUCCESS,
  IDEA_SAVE_REQUEST,
  IDEA_SAVE_FAILURE,
  IDEA_SAVE_SUCCESS,
  IDEA_DELETE_REQUEST,
  IDEA_DELETE_FAILURE,
  IDEA_DELETE_SUCCESS,
} from './ideas-actions'

const getMessage = _property('response.data.message')

export function * fetchIdeasRequest (): Generator<*, *, *> {
  try {
    const ideas = yield call(retrieveIdeas)
    yield put({
      type: IDEAS_FETCH_SUCCESS,
      payload: {
        ideas,
      },
    })
  } catch (error) {
    yield put({
      type: IDEAS_FETCH_FAILURE,
      payload: {
        errorDetails: getMessage(error),
        messageId: error.message || `unable_to_retrieve_ideas`,
      },
    })
  }
}

export function * fetchIdeaRequest ({
  payload: { id },
}: RetrieveIdeaActionType): Generator<*, *, *> {
  try {
    const idea = yield call(retrieveIdea, id)
    yield put({
      type: IDEA_FETCH_SUCCESS,
      payload: {
        idea,
      },
    })
  } catch (error) {
    const ideaId = id || 'no-idea'
    yield put({
      type: IDEA_FETCH_FAILURE,
      payload: {
        errorDetails: getMessage(error),
        messageId: error.message || `unable_to_retrieve_idea_${ideaId}`,
      },
    })
  }
}

export function * saveIdeaRequest ({
  payload: {
    idea: { localOnly: isCreation, ...idea },
  },
}: SaveIdeaActionType): Generator<*, *, *> {
  yield call(delay, 500)
  const saveIdea = isCreation ? createIdea : updateIdea
  try {
    const savedIdea = yield call(saveIdea, { ...idea, new: undefined })
    yield put({
      type: IDEA_SAVE_SUCCESS,
      payload: {
        idea: savedIdea,
      },
    })
  } catch (error) {
    yield put({
      type: IDEA_SAVE_FAILURE,
      payload: {
        errorDetails: getMessage(error),
        messageId: error.message || `unable_to_save_idea_${idea.id || ''}`,
      },
    })
  }
}

export function * deleteIdeaRequest ({
  payload: { idea },
}: SaveIdeaActionType): Generator<*, *, *> {
  try {
    yield call(deleteIdea, idea)
    yield put({
      type: IDEA_DELETE_SUCCESS,
      payload: {
        idea,
      },
    })
  } catch (error) {
    yield put({
      type: IDEA_DELETE_FAILURE,
      payload: {
        errorDetails: getMessage(error),
        messageId: error.message || `unable_to_delete_idea_${idea.id || ''}`,
      },
    })
  }
}

export default function * ideasSaga (): Generator<*, *, *> {
  yield takeLatest(IDEAS_FETCH_REQUEST, fetchIdeasRequest)
  yield takeLatest(IDEA_FETCH_REQUEST, fetchIdeaRequest)
  yield takeLatest(IDEA_SAVE_REQUEST, saveIdeaRequest)
  yield takeLatest(IDEA_DELETE_REQUEST, deleteIdeaRequest)
}
