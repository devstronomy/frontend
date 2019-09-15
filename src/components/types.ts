import { IPlanet } from './Planets'
import { ISatellite } from './Satellites'
import { SortDirectionType } from 'react-virtualized'

export interface IDataLoader {
  loadPlanets: () => Promise<IPlanet[]>
  loadSatellites: (planet: IPlanet) => Promise<ISatellite[]>
  loadAllSatellites: () => Promise<ISatellite[]>
}

export interface ISort {
  sortBy?: string
  sortDirection?: SortDirectionType
}
