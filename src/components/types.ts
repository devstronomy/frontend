import { IPlanet } from './Planets'
import { ISatellite } from './Satellites'
import { SortDirectionType } from 'react-virtualized'

export interface IDataLoader {
  loadPlanets: () => Promise<ReadonlyArray<IPlanet>>
  loadSatellites: (planet: IPlanet) => Promise<ReadonlyArray<ISatellite>>
  loadAllSatellites: () => Promise<ReadonlyArray<ISatellite>>
}

export interface ISort {
  sortBy?: string
  sortDirection?: SortDirectionType
}
