import React from 'react'
import { Index } from 'react-virtualized'
import * as S from './styles'

export type IUnits = { [unitId: string]: JSX.Element }

export abstract class TableComponent<P, S> extends React.Component<P, S> {
  private readonly units: IUnits

  protected constructor(props: P, units: IUnits) {
    super(props)
    this.units = units
  }

  abstract isItemSelected(index: number): boolean

  protected rowClassName = ({ index }: Index): string => {
    if (index === -1) {
      return ''
    }
    if (this.isItemSelected(index)) {
      return 'selectedRow'
    }
    if (index % 2 === 0) {
      return 'oddRow'
    }
    return ''
  }

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
