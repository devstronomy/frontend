import planets from './../data/planets.json'
import satellites from './../data/satellites.json'
import { IDataLoader } from './types'

const jsonDataLoader: IDataLoader = {
  // Loads all planets in the Solar System.
  loadPlanets: () => Promise.resolve(planets),

  // Loads satellites belonging to the given planet.
  loadSatellites: planet => Promise.resolve(satellites.filter(s => s.planetId === planet.id)),

  // Loads satellites of all planets in the Solar System.
  loadAllSatellites: () => Promise.resolve(satellites)
}

export default jsonDataLoader
