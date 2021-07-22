class PlotDeck {

  constructor(titles, values) {
//this={}
    const cards = values.map(cardValueArr => {
      const card = {};
      for (let i = 1; i < titles.length; i++ ){

        //TODO cardValueArr НАЧИНАЕТСЯ С 1, значит первая карта теряется
        card[titles[i]] = cardValueArr[i]
      }
      return card;
    })

    this[titles[0]] = values[0][0]
    this.cards = cards

    //return this
  }
}

  module.exports = PlotDeck;
