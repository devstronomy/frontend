import { IDataLoader } from './types'

const baseUrl = 'http://localhost:8080/'

const callbacks: IDataLoader = {
  loadPlanets: async () => (await fetch(`${baseUrl}planet/`)).json(),

  loadSatellites: async (planet) => (await fetch(`${baseUrl}/planet/${planet.id}/satellites`)).json(),

  loadAllSatellites: async () => (await fetch(`${baseUrl}satellite/`)).json(),
}

export default callbacks
