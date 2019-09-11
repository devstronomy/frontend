import * as C from './constants'
import { IPlanet } from './Planets'
import { List } from 'immutable'

export const loadPlanets = () =>
  ({
    type: C.LOAD_PLANETS,
    payload: {}
  } as const)

export const setPlanets = (planets: List<IPlanet>) =>
  ({
    type: C.SET_PLANETS,
    payload: { planets }
  } as const)

export const setSelectedPlanet = (selectedPlanet?: IPlanet) =>
  ({
    type: C.SELECT_PLANET,
    payload: { selectedPlanet }
  } as const)

export const unselectPlanet = () => setSelectedPlanet(undefined)

export type IActions =
  | ReturnType<typeof loadPlanets>
  | ReturnType<typeof setPlanets>
  | ReturnType<typeof setSelectedPlanet>
