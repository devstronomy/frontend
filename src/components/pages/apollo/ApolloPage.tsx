import React from 'react'
import * as S from './styles'
import { AutoSizer, Column, Index, Table } from 'react-virtualized'
import rawAbbreviations from '../../../data/apollo-abbr.json'
import { rowClassName } from '../../globalStyles'

const abbreviations: [[string, string]] = rawAbbreviations as any

const rowGetter = ({ index }: Index) => ({
  abbreviation: abbreviations[index][0],
  meaning: abbreviations[index][1]
})

const ApolloPage = () => (
  <S.ApolloPage id='ApolloPage'>
    <h1>Apollo Program Abbreviations</h1>
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          headerHeight={40}
          rowCount={abbreviations.length}
          rowClassName={rowClassName}
          rowHeight={40}
          rowGetter={rowGetter}
          width={width}
        >
          <Column
            label='Abbr'
            dataKey='abbreviation'
            width={50}
            className='rvt-main-column'
            flexGrow={0}
            flexShrink={10}
          />
          <Column
            label='Meaning'
            dataKey='meaning'
            width={10}
            className='rvt-string-column'
            flexGrow={1}
            flexShrink={0}
          />
        </Table>
      )}
    </AutoSizer>
  </S.ApolloPage>
)

export default ApolloPage
