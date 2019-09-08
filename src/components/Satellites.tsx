import React from 'react'
import { Column, Index, SortDirection, SortDirectionType, Table } from 'react-virtualized'
import { IPlanet } from './Planets'
import { List } from 'immutable'
import dataLoader from './data-loader-json'
import { connect } from 'react-redux'
import * as A from './actions'
import { IAppState } from './reducer'

export interface ISatellite {
  id: number
}

interface IProps {
  selectedPlanet?: IPlanet
  dispatchUnselectedPlanet: typeof A.unselectPlanet
  dispatchSetNumberOfSatellites: typeof A.setNumberOfSatellites
}

interface IState {
  sortBy?: string
  sortDirection?: SortDirectionType
  satellites: List<ISatellite>
}

class Satellites extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props)
    this.state = {
      satellites: List()
    }
  }

  componentDidMount() {
    this.loadAllSatellites()
  }

  componentDidUpdate(prevProps: IProps) {
    if (prevProps.selectedPlanet !== this.props.selectedPlanet) {
      this.loadSatellites(this.props.selectedPlanet)
    }
  }

  // Maps column name to its unit.
  units: { [unitId: string]: JSX.Element } = {
    'GM': <span>km<sup>3</sup>/sec<sup>2</sup></span>,
    'Mean Radius': <span>km</span>,
    'Mean Density': <span>g/cm<sup>3</sup></span>,
    'Magnitude': <span>V<sub>0</sub> or R</span>,
  }

  private rowClassName = ({index}: Index): string => {
    return index % 2 === 0 ? 'oddRow' : ''
  }

  private columnHeader = (column: string): React.ReactNode => {
    return <span>{column}<br/><span className='unit'>({this.units[column]})</span></span>
  }

  render(): React.ReactNode {
    const { satellites, sortDirection, sortBy } = this.state
    const { selectedPlanet } = this.props

    const planetName = selectedPlanet !== undefined ? selectedPlanet.name : null
    const showAllButton = selectedPlanet
      ? <span> (<button className='ahref' onClick={() => this.loadAllSatellites()}>show all satellites</button>)</span>
      : ' (select a planet above to filter satellites)'
    const planetSpan = <span className='header-highlight'>{planetName}</span>
    let satellitesHeader
    if (satellites.isEmpty()) {
      satellitesHeader = <span>Planet {planetSpan} does not have any satellites</span>
    } else { // render table with satellites
      satellitesHeader = planetName === null
        ? 'Satellites of all planets'
        : <span>Satellites of planet {planetSpan}</span>
    }
    satellitesHeader = <span><span className='header'>{satellitesHeader}</span><span> ({satellites.size} shown)</span></span>

    return (
      <div>
        <div>
          {satellitesHeader}{showAllButton}
        </div>

        <Table width={575}
               height={514}
               headerHeight={90}
               rowHeight={40}
               rowCount={this.state.satellites.size}
               rowGetter={({index}: Index) => this.state.satellites.get(index)}
               rowClassName={this.rowClassName}
               sort={this.sort}
               sortBy={sortBy}
               sortDirection={sortDirection}
        >
          <Column label='Name' dataKey='name' width={105} className='main-column'/>
          <Column label={this.columnHeader('GM')} dataKey='gm' width={95}/>
          <Column label={this.columnHeader('Mean Radius')} dataKey='radius' width={75}/>
          <Column label={this.columnHeader('Mean Density')} dataKey='density' width={75}/>
          <Column label={this.columnHeader('Magnitude')} dataKey='magnitude' width={105}/>
          <Column label='Geometric Albedo' dataKey='albedo' width={100}/>
        </Table>
      </div>
    )
  }

  private loadAllSatellites = () => {
    dataLoader.loadAllSatellites(this.setSatellites)
  }

  private loadSatellites = (planet?: IPlanet): void => {
    if (planet === undefined) {
      this.loadAllSatellites()
    } else {
      dataLoader.loadSatellites(planet, this.setSatellites)
    }
  }

  private setSatellites = (satellites: ISatellite[]): void => {
    this.setState({
      satellites: this.sortRawData(satellites)
    })
  }

  // TODO: get rid of duplicated code for sorting routines.
  private sort = ({sortBy, sortDirection}: { sortBy: string, sortDirection: SortDirectionType }) => {
    const sortedSatellites = this.sortList(sortBy, sortDirection, this.state.satellites)
    this.setState({sortBy, sortDirection, satellites: sortedSatellites})
  }

  private sortList = (sortBy: string, sortDirection: SortDirectionType, satellites: List<ISatellite>): List<ISatellite> => {
    return satellites
      .sortBy(sat => sat[sortBy])
      .update(sats => sortDirection === SortDirection.DESC ? sats.reverse() : sats)
  }

  private sortRawData = (satellites: ISatellite[]): List<ISatellite> => {
    const { sortBy, sortDirection } = this.state
    return sortBy && sortDirection
      ? this.sortList(sortBy, sortDirection, List(satellites))
      : List(satellites)
  }

}

const mapStateToProps = (state: IAppState) => ({
  selectedPlanet: state.selectedPlanet,
})

const mapDispatchToProps = {
  dispatchSetNumberOfSatellites: A.setNumberOfSatellites,
  dispatchUnselectedPlanet: A.unselectPlanet
}

export default connect(mapStateToProps, mapDispatchToProps)(Satellites)

