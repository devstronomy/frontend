import * as C from './constants'
import * as A from './actions'
import { IPlanet } from './Planets'
import { ISatellite } from './Satellites'

export interface IAppState {
  planets: ReadonlyArray<IPlanet>
  satellites: ReadonlyArray<ISatellite>

  selectedPlanet?: IPlanet

  planetsLoadingInProgress: boolean
  satellitesLoadingInProgress: boolean
}

const initialState: IAppState = {
  planets: [],
  satellites: [],

  selectedPlanet: undefined,

  planetsLoadingInProgress: false,
  satellitesLoadingInProgress: false
}

export default (state: IAppState = initialState, action: A.IActions): IAppState => {
  switch (action.type) {
    case C.LOAD_PLANETS:
      return {
        ...state,
        planetsLoadingInProgress: true
      }
    case C.SET_PLANETS:
      return {
        ...state,
        planets: action.payload.planets,
        planetsLoadingInProgress: false
      }
    case C.SELECT_PLANET:
      const { selectedPlanet } = action.payload
      // If the same planet is selected again, deselect it (undefined).
      const newSelectedPlanet = selectedPlanet === state.selectedPlanet ? undefined : selectedPlanet
      return {
        ...state,
        selectedPlanet: newSelectedPlanet
      }
    case C.LOAD_SATELLITES:
      return {
        ...state,
        satellitesLoadingInProgress: true
      }
    case C.SET_SATELLITES:
      return {
        ...state,
        satellites: action.payload.satellites,
        satellitesLoadingInProgress: false
      }
    default:
      return state
  }
}
