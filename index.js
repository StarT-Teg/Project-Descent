const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')
const Hero = require('./hero.js')
const {createHero, getPlotDeck} = require('./utils.js')

// let parsedHeroes = readXlsxFile('SIHM.xlsx',{sheet: 'Heroes 1.1'}).then((parse) => {
// let hero = createHero("Grey Ker", parse)
// console.log(hero)
// })

let parsedPlot = readXlsxFile('SIHM.xlsx',{sheet: 'vote4Plot'}).then((parse) => {

let validatedParsedTitles = parse[0].slice(0,6);
let validatedParsedValues = parse.filter(array => array[0] !== null);

return {validatedParsedTitles, validatedParsedValues}

}).then(({validatedParsedTitles, validatedParsedValues}) => {

let plotDeck = getPlotDeck ("Dragon's Greed", validatedParsedTitles, validatedParsedValues)
console.log(plotDeck);

})

 // console.log(parsedResult[0])

// readXlsxFile(fs.createReadStream('/SIHM')).then((rows) => {
//     console.log('строки2',rows)
// })
