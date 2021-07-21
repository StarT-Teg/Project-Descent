const Hero = require('./hero.js')
const PlotDeck = require('./PlotDeck.js')

const createHero = (heroName, variables) => {

  let titles = variables[0].slice(0, 14);
  let heroStats = variables.find(array => array[0] === heroName);

  let hero = new Hero(titles, heroStats);

  return hero;

}

const getPlotDeck = (plotDeckName, titles, values) => {

  let plotDeckValues = values.find(array => array[0] === plotDeckName);

  let plotDeck = new PlotDeck(titles, plotDeckValues)

  return plotDeck;

}

module.exports = {
  createHero,
  getPlotDeck
};
