import { connect } from 'react-redux'
import { Column as ColumnOrig, Index } from 'react-virtualized'

import * as A from './actions'
import { IPlanet } from './Planets'
import { IAppState } from './reducer'
import SatellitesHeader from './SatellitesHeader'
import { sort } from './sorting'
import * as S from './styles'
import { IUnits, TableComponent } from './TableComponent'
import { ISort } from './types'

// TODO: workaround for unmaintained library
const Column = ColumnOrig as any

export interface ISatellite {
  id: number
  planetId: number
}

type IState = Readonly<{
  sort?: ISort
}>

interface IProps {
  satellites: ReadonlyArray<ISatellite>
  selectedPlanet?: IPlanet

  dispatchLoadSatellites: typeof A.loadSatellites
  dispatchSetSatellites: typeof A.setSatellites
}

const units: IUnits = {
  GM: (
    <span>
      km<sup>3</sup>/sec<sup>2</sup>
    </span>
  ),
  'Mean Radius': <span>km</span>,
  'Mean Density': (
    <span>
      g/cm<sup>3</sup>
    </span>
  ),
  Magnitude: (
    <span>
      V<sub>0</sub> or R
    </span>
  ),
}

class Satellites extends TableComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props, units)
    this.state = {} as IState
  }

  componentDidMount() {
    this.props.dispatchLoadSatellites()
  }

  isItemSelected(_index: number): boolean {
    return false
  }

  render(): React.ReactNode {
    const { selectedPlanet } = this.props
    const satellites = selectedPlanet
      ? this.props.satellites.filter((s) => s.planetId === selectedPlanet.id)
      : this.props.satellites
    const { sort } = this.state

    return (
      <div>
        <SatellitesHeader numberOfSatellites={satellites.length} />

        <S.Table
          width={590}
          height={514}
          headerHeight={90}
          rowHeight={40}
          rowCount={satellites.length}
          rowGetter={({ index }: Index) => satellites[index]}
          rowClassName={this.rowClassName}
          sort={this.sort}
          sortBy={sort?.sortBy}
          sortDirection={sort?.sortDirection}
        >
          <Column label='Name' dataKey='name' width={105} className='rvt-main-column' />
          <Column label={this.labelWithUnits('GM')} dataKey='gm' width={95} />
          <Column label={this.labelWithUnits('Mean Radius')} dataKey='radius' width={80} />
          <Column label={this.labelWithUnits('Mean Density')} dataKey='density' width={80} />
          <Column label={this.labelWithUnits('Magnitude')} dataKey='magnitude' width={105} />
          <Column label='Geometric Albedo' dataKey='albedo' width={105} />
        </S.Table>
      </div>
    )
  }

  private sort = ({ sortBy, sortDirection }: ISort) => {
    this.setState({ sort: { sortBy, sortDirection } })
    this.props.dispatchSetSatellites(sort(this.props.satellites, sortBy, sortDirection))
  }
}

const mapStateToProps = (state: IAppState) => ({
  selectedPlanet: state.selectedPlanet,
  satellites: state.satellites,
})

const mapDispatchToProps = {
  dispatchLoadSatellites: A.loadSatellites,
  dispatchSetSatellites: A.setSatellites,
}

export default connect(mapStateToProps, mapDispatchToProps)(Satellites)
