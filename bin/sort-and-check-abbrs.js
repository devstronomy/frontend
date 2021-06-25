/**
 * Performs in-place sort of the entries in `rocket-abbr.json5` file.
 */
'use strict'

const JSON5 = require('json5')
const path = require('path')
const fs = require('fs')

function checkSortedData(abbrs) {
  let prev = null
  abbrs.forEach((line) => {
    const abbr = line[0]

    // Check format.
    if (line.length !== 4) {
      console.warn(`Invalid number of entries for abbreviation: ${abbr}`)
    }

    // Check for duplicates.
    if (abbr === prev) {
      console.warn(`Duplicated abbreviations: ${abbr}`)
    }
    prev = abbr
  })
}

const abbrsFile = path.join(__dirname, '..', 'data', 'rocket-abbr.json5')
const rawData = fs.readFileSync(abbrsFile, 'utf8')

const abbrs = JSON5.parse(rawData)
abbrs.sort((a, b) => a[0].localeCompare(b[0]))

fs.writeFileSync(abbrsFile, JSON5.stringify(abbrs))

checkSortedData(abbrs)

console.info(`\nThe content of '${path.relative(__dirname, abbrsFile)}' was sorted and checked.`)
console.info('If check has passed, reformat with Prettier and commit.')
