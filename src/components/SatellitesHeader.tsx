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
      <S.HeaderText>
        Planet <S.Text highlight>{planetName}</S.Text> does not have any satellites
      </S.HeaderText>
    ) : (
      <S.HeaderText>
        Satellites of planet <S.Text highlight>{planetName}</S.Text>
      </S.HeaderText>
    )

  private allSatellites = <S.HeaderText>Satellites of all planets</S.HeaderText>

  render(): React.ReactNode {
    const { selectedPlanet, numberOfSatellites, dispatchUnselectedPlanet } = this.props
    const headerElement = selectedPlanet
      ? this.satellitesForPlanet(selectedPlanet.name, numberOfSatellites)
      : this.allSatellites

    return (
      <S.SatellitesContainer>
        <S.HeaderContainer>
          {headerElement}
          <S.PlainText> ({numberOfSatellites} shown) </S.PlainText>
          {selectedPlanet ? (
            <S.LinkButton onClick={dispatchUnselectedPlanet}>(show all satellites)</S.LinkButton>
          ) : (
            <S.PlainText>(select a planet above to filter satellites)</S.PlainText>
          )}
        </S.HeaderContainer>
      </S.SatellitesContainer>
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
