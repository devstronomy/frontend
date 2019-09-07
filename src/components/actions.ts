import * as C from './constants'
import { IPlanet } from './Planets'

export const setSelectedPlanet = (selectedPlanet?: IPlanet) => ({
  type: C.SELECT_PLANET,
  payload: { selectedPlanet }
} as const)

export const setNumberOfSatellites = (nOfSatellites: number) => ({
  type: C.SET_NUMBER_OF_SATELLITES,
  payload: { nOfSatellites }
} as const)

export const unselectPlanet = () => setSelectedPlanet(undefined)

export type IActions =
  | ReturnType<typeof setSelectedPlanet>
  | ReturnType<typeof setNumberOfSatellites>
