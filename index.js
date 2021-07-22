const readXlsxFile = require('read-excel-file/node')
const fs = require('fs')
const {
  createHero,
  getPlotDeck,
  getOverlordDeck,
  getItems,
} = require('./utils.js')

// Создаём героя
// let parsedHeroes = readXlsxFile('SIHM.xlsx',{sheet: 'Heroes 1.1'}).then((parse) => {
// let hero = createHero("Grey Ker", cleaningValues(parse, 14))
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

/*
// Создаём колоду властелина
let parsedOverlordDeck = readXlsxFile('SIHM.xlsx',{sheet: 'vote4OVERLORD'}).then((parse) => {

let overlordDeck = getOverlordDeck('Basic II', cleaningValues(parse, 7));
console.log(overlordDeck)
})
*/

// Создаём список вещей
let parsedItemsAll = readXlsxFile('SIHM.xlsx', {
    sheet: 'Shop Items'
  }).then((parse) => {

const items = getItems(cleaningValues(parse, 23));
console.log(items);
      })



    function cleaningValues(valuesArrayUnclean, sliceTo) {

      const valuesArrayCleaned = [];

      valuesArrayUnclean.forEach(valueArrayUnclean => {

        // Слайсим по заданным размерам
        const valueArraySliced = valueArrayUnclean.slice(0, sliceTo)

        // Убираем нулы
        if ((valueArraySliced[0] === null) || (valueArraySliced[0] === undefined)) {
          return;
        }
        else{
          valuesArrayCleaned.push(valueArraySliced);
        }

      })

      return valuesArrayCleaned;
    }
