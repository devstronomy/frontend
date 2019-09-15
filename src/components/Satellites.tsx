import React from 'react'
import { Column, Index, SortDirection, Table } from 'react-virtualized'
import { connect } from 'react-redux'
import _sortBy from 'lodash/sortBy'

import { IPlanet } from './Planets'
import * as A from './actions'
import { IAppState } from './reducer'
import { ISort } from './types'

export interface ISatellite {
  id: number
  planetId: number
}

interface IState extends ISort {}

interface IProps {
  satellites: ISatellite[]
  selectedPlanet?: IPlanet

  dispatchLoadSatellites: typeof A.loadSatellites
  dispatchSetSatellites: typeof A.setSatellites
  dispatchUnselectedPlanet: typeof A.unselectPlanet
}

class Satellites extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {} as IState
  }

  componentDidMount() {
    this.props.dispatchLoadSatellites()
  }

  // Maps column name to its unit.
  units: { [unitId: string]: JSX.Element } = {
    'GM': <span>km<sup>3</sup>/sec<sup>2</sup></span>,
    'Mean Radius': <span>km</span>,
    'Mean Density': <span>g/cm<sup>3</sup></span>,
    'Magnitude': <span>V<sub>0</sub> or R</span>,
  }

  private rowClassName = ({ index }: Index): string => {
    return index % 2 === 0 ? 'oddRow' : ''
  }

  private columnHeader = (column: string): React.ReactNode => {
    return <span>{column}<br/><span className='unit'>({this.units[column]})</span></span>
  }

  render(): React.ReactNode {
    const { selectedPlanet } = this.props
    const satellites = selectedPlanet
      ? this.props.satellites.filter(s => s.planetId === selectedPlanet.id)
      : this.props.satellites
    const { sortDirection, sortBy } = this.state

    const planetName = selectedPlanet ? selectedPlanet.name : null
    const showAllButton = selectedPlanet
      ? <span> (<button className='ahref' onClick={() => this.loadAllSatellites()}>show all satellites</button>)</span>
      : ' (select a planet above to filter satellites)'
    const planetSpan = <span className='header-highlight'>{planetName}</span>
    let satellitesHeader
    if (satellites.length === 0) {
      satellitesHeader = <span>Planet {planetSpan} does not have any satellites</span>
    } else { // render table with satellites
      satellitesHeader = planetName === null
        ? 'Satellites of all planets'
        : <span>Satellites of planet {planetSpan}</span>
    }
    satellitesHeader = <span><span className='header'>{satellitesHeader}</span><span> ({satellites.length} shown)</span></span>

    return (
      <div>
        <div>
          {satellitesHeader}
          {showAllButton}
        </div>

        <Table
          width={575}
          height={514}
          headerHeight={90}
          rowHeight={40}
          rowCount={satellites.length}
          rowGetter={({ index }: Index) => satellites[index]}
          rowClassName={this.rowClassName}
          sort={this.sort}
          sortBy={sortBy}
          sortDirection={sortDirection}
        >
          <Column label='Name' dataKey='name' width={105} className='main-column' />
          <Column label={this.columnHeader('GM')} dataKey='gm' width={95} />
          <Column label={this.columnHeader('Mean Radius')} dataKey='radius' width={75} />
          <Column label={this.columnHeader('Mean Density')} dataKey='density' width={75} />
          <Column label={this.columnHeader('Magnitude')} dataKey='magnitude' width={105} />
          <Column label='Geometric Albedo' dataKey='albedo' width={100} />
        </Table>
      </div>
    )
  }

  private loadAllSatellites = () => {
    this.props.dispatchUnselectedPlanet()
  }

  private sort = ({ sortBy, sortDirection }: ISort) => {
    const { satellites } = this.props
    const sortedSatellites = _sortBy(satellites, sortBy!)
    if (sortDirection === SortDirection.DESC) {
      sortedSatellites.reverse()
    }
    this.props.dispatchSetSatellites(sortedSatellites)
    this.setState({ sortBy, sortDirection })
  }
}

const mapStateToProps = (state: IAppState) => ({
  selectedPlanet: state.selectedPlanet,
  satellites: state.satellites
})

const mapDispatchToProps = {
  dispatchLoadSatellites: A.loadSatellites,
  dispatchSetSatellites: A.setSatellites,
  dispatchUnselectedPlanet: A.unselectPlanet
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Satellites)
