import * as C from './constants'
import { IPlanet } from './Planets'
import * as A from './actions'

export interface IAppState {
  selectedPlanet?: IPlanet
  nOfSatellites: number
  planetsLoadingInProgress: boolean
}

const initialState: IAppState = {
  selectedPlanet: undefined,
  nOfSatellites: 0,
  planetsLoadingInProgress: false
}

export default (state: IAppState = initialState, action: A.IActions): IAppState => {

  switch (action.type) {
    case C.LOAD_PLANETS:
      console.log('MK:   C.LOAD_PLANETS')
      return {
        ...state,
        planetsLoadingInProgress: true
      }
    case C.SELECT_PLANET:
      const { selectedPlanet } = action.payload
      // If the same planet is selected again, deselect it (undefined).
      return {
        ...state,
        selectedPlanet: selectedPlanet === state.selectedPlanet ? undefined : selectedPlanet
      }
    default:
      return state
  }
}
