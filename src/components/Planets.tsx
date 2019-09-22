import React from 'react'
import { connect } from 'react-redux'
import { Column, Index, Table } from 'react-virtualized'

import Satellites from './Satellites'
import * as A from './actions'
import * as S from './styles'
import { IAppState } from './reducer'
import { ISort } from './types'
import { sort } from './sorting'

// styles
import '../css-react-virtualized/styles.css' // only needs to be imported once
import '../css/components/table.css'
import '../css/index.css'
import { IUnits, TableComponent } from './TableComponent'

export interface IPlanet {
  id: number
  name: string
}

interface IState extends ISort {}

interface IProps {
  planets: ReadonlyArray<IPlanet>
  selectedPlanet?: IPlanet

  dispatchLoadPlanets: typeof A.loadPlanets
  dispatchSetPlanets: typeof A.setPlanets
  dispatchSelectedPlanet: typeof A.setSelectedPlanet
}

// Maps column name to its unit.
const units: IUnits = {
  'Mass': <span>10<sup>24</sup>kg</span>,
  'Diameter': <span>km</span>,
  'Density': <span>kg/m<sup>3</sup></span>,
  'Gravity': <span>m/s<sup>2</sup></span>,
  'Escape Velocity': <span>km/s</span>,
  'Rotation Period': <span>hours</span>,
  'Length of Day': <span>hours</span>,
  'Distance from Sun': <span>10<sup>6</sup> km</span>,
  'Perihelion': <span>10<sup>6</sup> km</span>,
  'Aphelion': <span>10<sup>6</sup> km</span>,
  'Orbital Period': <span>days</span>,
  'Orbital Velocity': <span>km/s</span>,
  'Orbital Inclination': <span>degrees</span>,
  'Orbital Eccentricity': <span />,
  'Obliquity to Orbit': <span>degrees</span>,
  'Mean Temperature': <span>C</span>,
  'Surface Pressure': <span>bars</span>,
  'Number of Moons': <span>number</span>,
  'Ring System?': <span>Yes/No</span>,
  'Global Magnetic Field?': <span>Yes/No</span>
}

class Planets extends TableComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props, units)
    this.state = {}
  }

  componentDidMount() {
    this.props.dispatchLoadPlanets()
  }

  isItemSelected(index: number): boolean {
    return this.props.selectedPlanet === this.props.planets[index]
  }

  private selectPlanet = (planet: IPlanet): void => {
    this.props.dispatchSelectedPlanet(planet)
  }

  render(): React.ReactNode {
    const { planets } = this.props
    const { sortDirection, sortBy } = this.state
    return (
      <div>
        <S.header>Planets of our Solar System</S.header>

        <Table
          width={1950}
          height={450}
          headerHeight={90}
          rowHeight={40}
          rowCount={planets.length}
          rowGetter={({ index }: Index) => planets[index]}
          rowClassName={this.rowClassName}
          onRowClick={(props: any) => this.selectPlanet(props.rowData)}
          sort={this.sort}
          sortBy={sortBy}
          sortDirection={sortDirection}
        >
          <Column label='Name' dataKey='name' width={70} className='main-column' />
          <Column label={this.labelWithUnits('Distance from Sun')} dataKey='distanceFromSun' width={80} />
          <Column label='Moons' dataKey='numberOfMoons' width={70} />
          <Column label={this.labelWithUnits('Mass')} dataKey='mass' width={70} />
          <Column label={this.labelWithUnits('Diameter')} dataKey='diameter' width={90} />
          <Column label={this.labelWithUnits('Density')} dataKey='density' width={70} />
          <Column label={this.labelWithUnits('Gravity')} dataKey='gravity' width={70} />
          <Column label={this.labelWithUnits('Escape Velocity')} dataKey='escapeVelocity' width={80} />
          <Column label={this.labelWithUnits('Rotation Period')} dataKey='rotationPeriod' width={80} />
          <Column label={this.labelWithUnits('Length of Day')} dataKey='lengthOfDay' width={80} />
          <Column label={this.labelWithUnits('Perihelion')} dataKey='perihelion' width={100} />
          <Column label={this.labelWithUnits('Aphelion')} dataKey='aphelion' width={90} />
          <Column label={this.labelWithUnits('Orbital Period')} dataKey='orbitalPeriod' width={70} />
          <Column label={this.labelWithUnits('Orbital Velocity')} dataKey='orbitalVelocity' width={80} />
          <Column label={this.labelWithUnits('Orbital Inclination')} dataKey='orbitalInclination' width={100} />
          <Column label='Orbital Eccentricity' dataKey='orbitalEccentricity' width={100} />
          <Column label={this.labelWithUnits('Obliquity to Orbit')} dataKey='obliquityToOrbit' width={80} />
          <Column label={this.labelWithUnits('Mean Temperature')} dataKey='meanTemperature' width={115} />
          <Column label={this.labelWithUnits('Surface Pressure')} dataKey='surfacePressure' width={80} />
        </Table>

        <Satellites />
      </div>
    )
  }

  // TODO: Put the two columns below back to the table and fix their data.
  //<Column label='Has Ring System' dataKey='hasRingSystem' width={80} className='text' />
  //<Column label='Has Global Magnetic Field' dataKey='hasGlobalMagneticField' width={80} className='text' />

  private sort = ({ sortBy, sortDirection }: ISort) => {
    this.setState({ sortBy, sortDirection })
    this.props.dispatchSetPlanets(sort(this.props.planets, sortBy, sortDirection))
  }
}

const mapStateToProps = (state: IAppState) => ({
  selectedPlanet: state.selectedPlanet,
  planets: state.planets
})

const mapDispatchToProps = {
  dispatchLoadPlanets: A.loadPlanets,
  dispatchSetPlanets: A.setPlanets,
  dispatchSelectedPlanet: A.setSelectedPlanet
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Planets)
