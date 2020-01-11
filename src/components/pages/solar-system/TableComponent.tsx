import React from 'react'
import { Index } from 'react-virtualized'
import * as S from './styles'
import { rowClassName } from '../../globalStyles'

export type IUnits = { [unitId: string]: JSX.Element }

export abstract class TableComponent<P, S> extends React.Component<P, S> {
  private readonly units: IUnits

  protected constructor(props: P, units: IUnits) {
    super(props)
    this.units = units
  }

  abstract isItemSelected(index: number): boolean

  protected rowClassName = (index: Index) => rowClassName(index, index => this.isItemSelected(index))

  protected labelWithUnits = (column: string): React.ReactNode => {
    return (
      <span>
        {column}
        <br />
        <S.Unit>({this.units[column]})</S.Unit>
      </span>
    )
  }
}
