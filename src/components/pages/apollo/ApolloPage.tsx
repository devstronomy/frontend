import React, { useState } from 'react'
import { AutoSizer, Column, Index, Table } from 'react-virtualized'
import { InputAdornment } from '@material-ui/core'
import * as I from '@material-ui/icons'

import * as S from './styles'
import rawAbbreviations from '../../../data/apollo-abbr.json'
import { rowClassName } from '../../globalStyles'

const abbreviations: [[string, string]] = rawAbbreviations as any

const Search = (props: { onChange: (abbr: string) => void }) => (
  <form noValidate autoComplete='off'>
    <S.DSTextField
      id='outlined-search'
      label='Search field'
      type='search'
      variant='outlined'
      onChange={e => props.onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <I.SearchTwoTone />
          </InputAdornment>
        )
      }}
    />
  </form>
)

const ApolloPage = () => {
  const [abbrFilter, setAbbreviation] = useState('')

  const filteredAbbrs =
    abbrFilter.length === 0
      ? abbreviations
      : abbreviations.filter(abbr => abbr[0].toLowerCase().includes(abbrFilter.toLowerCase()))

  const rowGetter = ({ index }: Index) => ({
    abbreviation: filteredAbbrs[index][0],
    meaning: filteredAbbrs[index][1]
  })

  return (
    <S.ApolloPage id='ApolloPage'>
      <h1>Apollo Program Abbreviations</h1>
      <Search onChange={setAbbreviation} />
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            headerHeight={40}
            rowCount={filteredAbbrs.length}
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
}

export default ApolloPage
