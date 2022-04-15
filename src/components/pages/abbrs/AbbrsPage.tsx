import { InputAdornment } from '@material-ui/core'
import * as I from '@material-ui/icons'
import SearchIcon from '@material-ui/icons/Search'
import rawAbbreviations from 'Data/rocket-abbr.json5'
import _partition from 'lodash/partition'
import { useState } from 'react'
import { AutoSizer as AutoSizerOrig, Column as ColumnOrig, Index } from 'react-virtualized'

import { rowClassName } from '../../globalStyles'
import { Table } from '../solar-system/virtualized-styles'
import * as S from './styles'

// TODO: workaround for unmaintained library
const AutoSizer = AutoSizerOrig as any
const Column = ColumnOrig as any

const abbreviations: [[string, string]] = rawAbbreviations as any

const Search = (props: { onChange: (abbr: string) => void }) => (
  <form noValidate autoComplete='off'>
    <S.DSTextField
      autoFocus
      id='outlined-search'
      label='Search field'
      type='search'
      variant='outlined'
      onChange={(e) => props.onChange(e.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <I.SearchTwoTone />
          </InputAdornment>
        ),
      }}
    />
  </form>
)

/**
 * Result with entries where abbreviation matches, concatenated with entries where description matches.
 */
const filterAbbreviations = (searchText: string) => {
  const [abbrs, theRest] = _partition(abbreviations, (abbr) => abbr[0].toLowerCase().includes(searchText.toLowerCase()))
  return abbrs.concat(theRest.filter((abbr) => abbr[1].toLowerCase().includes(searchText.toLowerCase())))
}

const AbbrsPage = () => {
  const [searchText, setSearchText] = useState('')
  const filteredAbbrs = filterAbbreviations(searchText)

  const rowGetter = ({ index }: Index) => ({
    abbreviation: filteredAbbrs[index][0],
    meaning: filteredAbbrs[index][1],
  })

  return (
    <S.AbbrsPage id='Abbreviations'>
      <h1>Abbreviations related to rocketry and space</h1>
      <Search onChange={setSearchText} />
      <S.TableWrapper>
        <AutoSizer>
          {({ height, width }: any) => (
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
                width={90}
                className='rvt-main-column'
                flexGrow={0}
                flexShrink={10}
              />
              <Column
                cellRenderer={({ rowData }: any) => (
                  <div className='flex-center w-full'>
                    <div className='flex-grow'>{rowData.meaning}</div>
                    <div>
                      <a
                        href={`https://www.google.com/search?q=${rowData.abbreviation}+${rowData.meaning}`}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <SearchIcon />
                      </a>
                    </div>
                  </div>
                )}
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
      </S.TableWrapper>
    </S.AbbrsPage>
  )
}

export default AbbrsPage
