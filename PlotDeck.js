class PlotDeck{

    constructor(deck, values){

      for(let i = 0; i < deck.length; i++){
        this[deck[i]] = values[i]

      }
    }
  }

  module.exports = PlotDeck;
