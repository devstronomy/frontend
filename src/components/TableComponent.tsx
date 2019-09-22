import React from 'react'
import { Index } from 'react-virtualized'

export type IUnits = { [unitId: string]: JSX.Element }

export abstract class TableComponent<P, S> extends React.Component<P, S> {
  private units: IUnits

  constructor(props: P, units: IUnits) {
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
        <span className='unit'>({this.units[column]})</span>
      </span>
    )
  }
}
