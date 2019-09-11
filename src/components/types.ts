import { IPlanet } from './Planets.jsx'
import { ISatellite } from './Satellites.jsx'

export default interface IDataLoader {
  loadPlanets: () => Promise<IPlanet[]>
  loadSatellites: (planet: IPlanet) => Promise<IPlanet[]>
  loadAllSatellites: () => Promise<ISatellite[]>
}
