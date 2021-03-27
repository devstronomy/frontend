import { call, put, takeLatest } from 'redux-saga/effects'

import * as A from './actions'
import * as C from './constants'
import dataLoader from './data-loader-json'

export const watchLoadPlanets = function* () {
  yield takeLatest(C.LOAD_PLANETS, loadPlanetsFlow)
}

export const loadPlanetsFlow = function* () {
  try {
    const planets = yield call(dataLoader.loadPlanets)
    yield put(A.setPlanets(planets))
  } catch (err) {
    console.error('Loading planets failed')
  }
}

export const watchLoadSatellites = function* () {
  yield takeLatest(C.LOAD_SATELLITES, loadSatellitesFlow)
}

export const loadSatellitesFlow = function* () {
  try {
    const satellites = yield call(dataLoader.loadAllSatellites)
    yield put(A.setSatellites(satellites))
  } catch (err) {
    console.error('Loading satellites failed')
  }
}

export default [watchLoadPlanets, watchLoadSatellites]
