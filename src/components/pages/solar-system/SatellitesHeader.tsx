import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { IAppState } from './reducer'
import * as S from './styles'
import * as A from './actions'

interface IOwnProp {
  numberOfSatellites: number
}

const SatellitesHeader = (props: IOwnProp) => {
  const dispatch = useDispatch()
  const selectedPlanet = useSelector((state: IAppState) => state.selectedPlanet)

  const { numberOfSatellites } = props
  const headerElement = selectedPlanet ? (
    satellitesForPlanetInfo(selectedPlanet.name, numberOfSatellites)
  ) : (
    <S.HeaderText>Satellites of all planets</S.HeaderText>
  )

  return (
    <S.SatellitesContainer>
      <S.HeaderContainer>
        {headerElement}
        <S.PlainText> ({numberOfSatellites} shown) </S.PlainText>
        {selectedPlanet ? (
          <S.LinkButton onClick={() => dispatch(A.unselectPlanet())}>(show all satellites)</S.LinkButton>
        ) : (
          <S.PlainText>(select a planet above to filter satellites)</S.PlainText>
        )}
      </S.HeaderContainer>
    </S.SatellitesContainer>
  )
}

const satellitesForPlanetInfo = (planetName: String, numberOfSatellites: number) =>
  numberOfSatellites === 0 ? (
    <S.HeaderText>
      Planet <S.Text highlight>{planetName}</S.Text> does not have any satellites
    </S.HeaderText>
  ) : (
    <S.HeaderText>
      Satellites of planet <S.Text highlight>{planetName}</S.Text>
    </S.HeaderText>
  )

export default React.memo(SatellitesHeader)
