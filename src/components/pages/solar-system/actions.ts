import * as C from './constants'
import { IPlanet } from './Planets'
import { ISatellite } from './Satellites'

export const loadPlanets = () =>
  ({
    type: C.LOAD_PLANETS,
    payload: {}
  } as const)

export const setPlanets = (planets: ReadonlyArray<IPlanet>) =>
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

export const loadSatellites = () =>
  ({
    type: C.LOAD_SATELLITES,
    payload: {}
  } as const)

export const setSatellites = (satellites: ReadonlyArray<ISatellite>) =>
  ({
    type: C.SET_SATELLITES,
    payload: { satellites }
  } as const)

export type IActions =
  | ReturnType<typeof loadPlanets>
  | ReturnType<typeof setPlanets>
  | ReturnType<typeof setSelectedPlanet>
  | ReturnType<typeof loadSatellites>
  | ReturnType<typeof setSatellites>
