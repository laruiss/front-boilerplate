// @flow
import { all } from 'redux-saga/effects'
import ideasSaga from './ideas/ideas-saga'

export default function * rootSaga (): Generator<*, *, *> {
  yield all([ideasSaga()])
}
