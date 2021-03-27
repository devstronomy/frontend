import { SortDirectionType } from 'react-virtualized'

import { IPlanet } from './Planets'
import { ISatellite } from './Satellites'

export interface IDataLoader {
  loadPlanets: () => Promise<ReadonlyArray<IPlanet>>
  loadSatellites: (planet: IPlanet) => Promise<ReadonlyArray<ISatellite>>
  loadAllSatellites: () => Promise<ReadonlyArray<ISatellite>>
}

export interface ISort {
  sortBy: string
  sortDirection: SortDirectionType
}
