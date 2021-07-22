const Hero = require('./hero.js')
const PlotDeck = require('./PlotDeck.js')
const OverlordDeck = require('./OverlordDeck.js')

const createHero = (heroName, variables) => {

  let titles = variables[0].slice(0, 14);
  let heroStats = variables.find(array => array[0] === heroName);

  let hero = new Hero(titles, heroStats);

  return hero;

}

const getPlotDeck = (titles, plotDeckValues) => {

  let plotDeck = new PlotDeck(titles, plotDeckValues)

  return plotDeck;

}

const getOverlordDeck = (basicDeck, overlordDeckValues) => {

const isBasicDeck = basicDeck.split(" ")[1].length === 1 ? "basic ii" : "basic i"

  //const isBasicDeck = basicDeck.length >  ? 'Basic I' : 'basic ii'

const overlordDeckValuesFiltered = overlordDeckValues
.filter((overlordCardValuesArray, index) => index !== 0 && overlordCardValuesArray[0].toLowerCase().trim(" ") !== isBasicDeck);

const overlordDeck = new OverlordDeck(getTitles(7, overlordDeckValues), overlordDeckValuesFiltered);

  return overlordDeck;
}

const getTitles = (sliceNumber, values) => {

  return values[0].slice(0, sliceNumber);
}

module.exports = {
  createHero,
  getPlotDeck,
  getOverlordDeck,
};
