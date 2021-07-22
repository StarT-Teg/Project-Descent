class OverlordDeck {

  constructor(titles, overlordDeckValues) {

    let classesAll = {};

    const cardsAll = overlordDeckValues.map(cardValueArr => {

      classesAll[cardValueArr[0]] = '';
      const card = {};

      for (let i = 0; i < titles.length; i++) {

        card[titles[i]] = cardValueArr[i];

      }
      // При работе в map return заменяет собой значение, к которому применялась функция
      // Итого был массив массивов, но return заменяет вторые массивы на объекты card, созданные в цикле
      return card;
    })

    //console.log(classesAll);

    const decksAll = [];

    for (let key in classesAll) {
      decksAll.push(makeDeck(key, cardsAll));
    }

    // const deck = {
    //   Class : '',
    //   Cards : [],
    // };
    //
    // cardsAll.forEach(card => {
    //
    //   if (decksAll.includes(deck.Class = card.Class)){
    //
    //     decksAll[decksAll.indexOf(deck.Class = card.Class)] = deck.Cards.push(card);
    //   }
    //   else{
    //     decksAll.push(deck["Class"] = card.Class);
    //     decksAll.push(deck.Cards.push(card));
    //   }
    //
    //
    // })

    this.decksAll = decksAll;

    function makeDeck(attribute, cardsAll) {

      const deck = {
        "Class": attribute,
        "Cards": [],
      }

      deck.Cards = cardsAll.filter(card => card.Class === attribute);

      return deck;

    }
  }
}

module.exports = OverlordDeck;
