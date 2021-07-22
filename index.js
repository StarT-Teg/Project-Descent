const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')
const Hero = require('./hero.js')
const {
  createHero,
  getPlotDeck,
  getOverlordDeck,
} = require('./utils.js')

// Создаём героя
// let parsedHeroes = readXlsxFile('SIHM.xlsx',{sheet: 'Heroes 1.1'}).then((parse) => {
// let hero = createHero("Grey Ker", parse)
// console.log(hero)
// })

/*
// Создаём колоду замыслов
let parsedPlotDeck = readXlsxFile('SIHM.xlsx', {
  sheet: 'vote4Plot'
}).then((parse) => {

  let validatedParsedTitles = parse[0].slice(0, 6);
  let validatedParsedValues = parse
  .filter(array => array[0] === "Dragon's Greed")
  .map(array => array.slice(0, 6));

  return {
    validatedParsedTitles,
    validatedParsedValues
  }

}).then(({
  validatedParsedTitles,
  validatedParsedValues
}) => {

  let plotDeck = getPlotDeck(validatedParsedTitles, validatedParsedValues)
  console.log(plotDeck);

})
*/

// Создаём колоду властелина
let parsedOverlordDeck = readXlsxFile('SIHM.xlsx',{sheet: 'vote4OVERLORD'}).then((parse) => {



let  overlordDeckValues = [];
parse.forEach(overlordCardValuesArray => {

let overlordCardValuesSliced = overlordCardValuesArray.slice(0,7)

  if (overlordCardValuesSliced.includes(null)){
    return;
  }

overlordDeckValues.push(overlordCardValuesSliced);

})

let overlordDeck = getOverlordDeck('Basic II', overlordDeckValues);
console.log(overlordDeck)
})

// console.log(parsedResult[0])
