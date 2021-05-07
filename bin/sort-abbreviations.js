/**
 * Performs in-place sort of the entries in `rocket-abbr.json5` file.
 */
'use strict'

const JSON5 = require('json5')
const path = require('path')
const fs = require('fs')

const abbrsFile = path.join(__dirname, '..', 'data', 'rocket-abbr.json5')
const rawData = fs.readFileSync(abbrsFile, 'utf8')

const abbrs = JSON5.parse(rawData)
abbrs.sort((a, b) => a[0].localeCompare(b[0]))

fs.writeFileSync(abbrsFile, JSON5.stringify(abbrs))

console.info(`\nThe content of '${path.relative(__dirname, abbrsFile)}' was sorted.`)
console.info('Reformat with Prettier and commit.')
