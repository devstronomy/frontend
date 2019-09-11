import { call, put, takeLatest } from 'redux-saga/effects'
import * as A from './actions'
import * as C from './constants'
import dataLoader from './data-loader-json'

export const watchLoadPlanets = function*() {
  yield takeLatest(C.LOAD_PLANETS, loadPlanetsFlow)
}

export const loadPlanetsFlow = function*() {
  console.log('MK: loadPlanetsFlow() called')
  try {
    const planets = yield call(dataLoader.loadPlanets)
    yield put(A.setPlanets(planets))
  } catch (err) {
    console.log('Loading planets failed')
  }
}

export default [watchLoadPlanets]
