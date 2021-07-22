const Hero = require('./hero.js')
const PlotDeck = require('./PlotDeck.js')
const OverlordDeck = require('./OverlordDeck.js')
const Items = require('./Items.js')

const createHero = (heroName, variables) => {

  let heroStats = variables.find(array => array[0] === heroName);

  let hero = new Hero(variables[0], heroStats);

  return hero;

}

const getPlotDeck = (titles, plotDeckValues) => {

  let plotDeck = new PlotDeck(titles, plotDeckValues)

  return plotDeck;

}

const getOverlordDeck = (basicDeck, overlordDeckValues) => {

  const isBasicDeck = basicDeck.split(" ")[1].length === 1 ? "basic ii" : "basic i"

// Фильтр нужен для поиска и исключения одной из неиспользованных базовых колод
  const overlordDeckValuesFiltered = overlordDeckValues
    .filter((overlordCardValuesArray, index) => index !== 0 && overlordCardValuesArray[0].toLowerCase().trim(" ") !== isBasicDeck);

  const overlordDeck = new OverlordDeck(overlordDeckValues[0], overlordDeckValuesFiltered);

  return overlordDeck;
}

const getItems = (itemsValuesAll) => {

  const items = new Items(itemsValuesAll[0], itemsValuesAll)

  return items;
}

module.exports = {
  createHero,
  getPlotDeck,
  getOverlordDeck,
  getItems,
};
