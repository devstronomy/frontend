import React from 'react'
import { connect } from 'react-redux'

import { IPlanet } from './Planets'
import { IAppState } from './reducer'
import * as S from './styles'
import * as A from './actions'

interface IOwnProp {
  numberOfSatellites: number
}

interface IReduxProps {
  selectedPlanet?: IPlanet
  dispatchUnselectedPlanet: typeof A.unselectPlanet
}

class SatellitesHeader extends React.Component<IOwnProp & IReduxProps> {
  private satellitesForPlanet = (planetName: String, numberOfSatellites: number) =>
    numberOfSatellites === 0 ? (
      <S.text>
        Planet <S.text highlight>{planetName}</S.text> does not have any satellites
      </S.text>
    ) : (
      <S.text>
        Satellites of planet <S.text highlight>{planetName}</S.text>
      </S.text>
    )

  private allSatellites = <S.text>Satellites of all planets</S.text>

  render(): React.ReactNode {
    const { selectedPlanet, numberOfSatellites, dispatchUnselectedPlanet } = this.props
    const headerElement = selectedPlanet
      ? this.satellitesForPlanet(selectedPlanet.name, numberOfSatellites)
      : this.allSatellites

    return (
      <S.planetsContainer>
        <S.header>
          {headerElement}
          <S.plainText> ({numberOfSatellites} shown) </S.plainText>
          {selectedPlanet ? (
            <S.button onClick={dispatchUnselectedPlanet}>
              show all satellites
            </S.button>
          ) : (
            <S.plainText>(select a planet above to filter satellites)</S.plainText>
          )}
        </S.header>
      </S.planetsContainer>
    )
  }
}

const mapStateToProps = (state: IAppState) => ({
  selectedPlanet: state.selectedPlanet
})

const mapDispatchToProps = {
  dispatchUnselectedPlanet: A.unselectPlanet
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SatellitesHeader)
